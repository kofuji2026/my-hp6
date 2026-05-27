"use client";

import { useState } from "react";
import Link from "next/link";
import { newsItems } from "@/data/news";
import NewsCard from "@/components/cards/NewsCard";
import type { NewsCategory } from "@/types/news";

type NewsFilter = "すべて" | NewsCategory;
const FILTERS: NewsFilter[] = ["すべて", "お知らせ", "ニュース", "コラム", "施工事例"];

export default function NewsListSection() {
  const [active, setActive] = useState<NewsFilter>("すべて");

  const filtered =
    active === "すべて"
      ? newsItems
      : newsItems.filter((n) => n.category === active);

  return (
    <section className="py-24 bg-canvas-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* フィルタータブ */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs font-inter px-4 py-2 border transition-colors duration-200 ${
                active === f
                  ? "bg-canvas-black text-white border-canvas-black"
                  : "bg-transparent text-canvas-muted border-canvas-border hover:border-canvas-gold hover:text-canvas-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ニュースリスト */}
        <div className="flex flex-col">
          {filtered.map((news) => (
            <Link key={news.id} href={`/news/${news.slug}`} className="block">
              <NewsCard news={news} />
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-canvas-muted py-12 text-center">
            該当する記事がありません。
          </p>
        )}
      </div>
    </section>
  );
}
