import type { News } from "@/types/news";
import { cn } from "@/lib/utils";

const categoryColors: Record<News["category"], string> = {
  お知らせ: "text-blue-600 border-blue-200 bg-blue-50",
  施工事例: "text-canvas-gold border-canvas-gold/30 bg-canvas-gold/5",
  コラム: "text-emerald-600 border-emerald-200 bg-emerald-50",
  ニュース: "text-canvas-muted border-canvas-border bg-canvas-surface",
};

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const date = new Date(news.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex gap-5 py-6 border-b border-canvas-border hover:border-canvas-gold/40 transition-colors cursor-pointer">
      <div className="flex flex-col gap-1 min-w-[110px]">
        <time className="text-xs font-inter text-canvas-muted">{date}</time>
        <span
          className={cn(
            "text-[10px] font-inter px-2 py-0.5 border w-fit",
            categoryColors[news.category]
          )}
        >
          {news.category}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-noto font-medium text-canvas-black group-hover:text-canvas-gold transition-colors leading-snug">
          {news.title}
        </h3>
        <p className="text-xs text-canvas-muted leading-relaxed line-clamp-2">
          {news.excerpt}
        </p>
      </div>
    </article>
  );
}
