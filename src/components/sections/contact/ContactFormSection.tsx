"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

type FormState = {
  name: string;
  email: string;
  tel: string;
  type: string;
  message: string;
};

const contactTypes = [
  "不動産の購入相談",
  "不動産の売却・買取査定",
  "リフォーム・リノベーション相談",
  "その他",
];

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    tel: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("お名前・メールアドレス・お問い合わせ内容は必須です。");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading
            label="CONTACT"
            title="お問い合わせ"
            subtitle="ご質問・ご相談はこちらからどうぞ。通常2営業日以内にご返信いたします。"
          />
        </AnimatedSection>

        {submitted ? (
          <AnimatedSection className="bg-canvas-surface border border-canvas-border p-10 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-canvas-gold flex items-center justify-center text-white text-xl">
              ✓
            </div>
            <h3 className="text-lg font-noto font-bold text-canvas-black">
              送信が完了しました
            </h3>
            <p className="text-sm text-canvas-muted">
              お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。
            </p>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-inter text-canvas-black">
                    お名前 <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className="border border-canvas-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-canvas-gold transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-inter text-canvas-black">
                    メールアドレス <span className="text-red-500">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="taro@example.com"
                    className="border border-canvas-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-canvas-gold transition-colors"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-inter text-canvas-black">
                    電話番号
                  </span>
                  <input
                    type="tel"
                    name="tel"
                    value={form.tel}
                    onChange={handleChange}
                    placeholder="03-XXXX-XXXX"
                    className="border border-canvas-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-canvas-gold transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-inter text-canvas-black">
                    お問い合わせ種別
                  </span>
                  <div className="relative">
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full border border-canvas-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-canvas-gold transition-colors appearance-none cursor-pointer pr-10"
                    >
                      <option value="">選択してください</option>
                      {contactTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-canvas-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-inter text-canvas-black">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="ご相談内容をお書きください。"
                  className="border border-canvas-border px-4 py-3 text-sm bg-white focus:outline-none focus:border-canvas-gold transition-colors resize-none"
                />
              </label>

              {error && (
                <p className="text-xs text-red-500">{error}</p>
              )}

              <Button type="submit" variant="primary" className="self-start">
                送信する
              </Button>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
