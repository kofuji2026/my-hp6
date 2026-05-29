"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

/** [text](url) 形式のインラインリンクをReactノードに変換 */
function parseInlineLinks(text: string): React.ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }
    const [, label, url] = match;
    if (url.startsWith("tel:")) {
      result.push(
        <a
          key={match.index}
          href={url}
          className="text-canvas-gold underline underline-offset-2 hover:text-canvas-gold-lt transition-colors"
        >
          {label}
        </a>
      );
    } else if (url.startsWith("/")) {
      result.push(
        <Link
          key={match.index}
          href={url}
          className="text-canvas-gold underline underline-offset-2 hover:text-canvas-gold-lt transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      result.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-canvas-gold underline underline-offset-2 hover:text-canvas-gold-lt transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

/** アシスタントの返答テキストを読みやすく整形するレンダラー */
function renderContent(text: string) {
  const paragraphs = text.split(/\n\n+/);
  return (
    <div className="flex flex-col gap-2">
      {paragraphs.map((para, pi) => {
        const lines = para.split("\n").filter((l) => l.trim() !== "");
        // 箇条書き行（・ ● - • で始まる）
        const isList = lines.length > 0 && lines.every((l) => /^[・●\-•]/.test(l.trim()));
        if (isList) {
          return (
            <ul key={pi} className="flex flex-col gap-0.5">
              {lines.map((line, li) => (
                <li key={li} className="flex gap-1">
                  <span className="shrink-0 text-canvas-gold">・</span>
                  <span>{parseInlineLinks(line.replace(/^[・●\-•]\s*/, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }
        // 通常の段落（行内の \n は <br> に変換）
        return (
          <p key={pi}>
            {lines.map((line, li) => (
              <span key={li}>
                {parseInlineLinks(line)}
                {li < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

const SUGGESTIONS = [
  "無料査定について教えてください",
  "施工事例を見たい",
  "リフォーム相談をしたい",
  "来店予約したい",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendText = async (text: string) => {
    if (!text || loading) return;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: next }),
    });

    const json = await res.json();

    if (!res.ok) {
      const detail = json.error ? `（${json.error}）` : "";
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `エラーが発生しました。しばらくしてからお試しください。${detail}` },
      ]);
      setLoading(false);
      return;
    }

    setMessages((m) => [...m, { role: "assistant", content: json.text ?? "" }]);
    setLoading(false);
  };

  const send = async () => {
    await sendText(input.trim());
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-canvas-gold text-white flex items-center justify-center shadow-lg hover:bg-canvas-gold-lt transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="AIチャット"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white border border-canvas-border shadow-xl flex flex-col"
            style={{ maxHeight: "min(520px, calc(100vh - 120px))" }}
          >
            {/* Header */}
            <div className="bg-canvas-black px-5 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-canvas-gold" />
              <div>
                <p className="text-xs font-inter text-white tracking-[0.15em] uppercase">AI Assistant</p>
                <p className="text-[10px] text-white/50 mt-0.5">CANVAS REFORM</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 text-sm">
              {messages.length === 0 && (
                <div className="flex flex-col gap-3">
                  <div className="text-canvas-muted text-xs leading-relaxed">
                    <p className="mb-1">こんにちは。CANVAS REFORMのAIアシスタントです。</p>
                    <p>リノベーション・不動産に関するご質問はお気軽にどうぞ。</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-1">
                    <p className="text-[10px] text-canvas-muted/60 font-inter tracking-wider uppercase">よくある質問</p>
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendText(s)}
                        disabled={loading}
                        className="text-left text-xs px-3 py-2 border border-canvas-border text-canvas-black hover:border-canvas-gold hover:text-canvas-gold transition-colors disabled:opacity-40"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-canvas-gold text-white"
                        : "bg-canvas-surface text-canvas-black border border-canvas-border"
                    }`}
                  >
                    {m.content ? (
                      m.role === "assistant" ? renderContent(m.content) : m.content
                    ) : (
                      <span className="inline-flex gap-1">
                        <span className="animate-bounce" style={{ animationDelay: "0ms" }}>·</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>·</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>·</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-canvas-border px-3 py-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="メッセージを入力…"
                disabled={loading}
                className="flex-1 text-xs px-3 py-2 border border-canvas-border bg-canvas-bg focus:outline-none focus:border-canvas-gold transition-colors placeholder:text-canvas-muted/60 disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="w-9 h-9 bg-canvas-gold text-white flex items-center justify-center hover:bg-canvas-gold-lt transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
