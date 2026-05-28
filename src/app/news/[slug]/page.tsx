import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { newsItems } from "@/data/news";
import PageHero from "@/components/ui/PageHero";
import CtaBanner from "@/components/ui/CtaBanner";
import BeforeAfterImage from "@/components/ui/BeforeAfterImage";
import { cn } from "@/lib/utils";
import type { NewsCategory } from "@/types/news";

const categoryColors: Record<NewsCategory, string> = {
  お知らせ: "text-blue-600 border-blue-200 bg-blue-50",
  施工事例: "text-canvas-gold border-canvas-gold/30 bg-canvas-gold/5",
  コラム: "text-emerald-600 border-emerald-200 bg-emerald-50",
  ニュース: "text-canvas-muted border-canvas-border bg-canvas-surface",
};

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = newsItems.find((n) => n.slug === slug);
  if (!news) return {};
  return {
    title: news.title,
    description: news.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = newsItems.find((n) => n.slug === slug);
  if (!news) notFound();

  const date = new Date(news.date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const bodyText = news.body ?? news.excerpt;

  return (
    <>
      <PageHero
        label={news.category}
        title={news.title}
        breadcrumb={[
          { label: "ニュース・コラム", href: "/news" },
          { label: news.title },
        ]}
      />

      {/* 記事本文 */}
      <section className="py-24 bg-canvas-bg">
        <div className="max-w-3xl mx-auto px-6">
          {/* メタ情報 */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-canvas-border">
            <time className="text-sm font-inter text-canvas-muted">{date}</time>
            <span
              className={cn(
                "text-[10px] font-inter px-2 py-0.5 border",
                categoryColors[news.category]
              )}
            >
              {news.category}
            </span>
          </div>

          {/* Before / After 画像（施工事例記事のみ） */}
          {news.beforeImage && news.afterImage && (
            <div className="mb-12">
              <BeforeAfterImage
                beforeSrc={news.beforeImage}
                afterSrc={news.afterImage}
                title={news.title}
                className="max-w-2xl"
              />
              <p className="text-[10px] text-canvas-muted font-inter mt-2 text-center">
                施工前後の様子。タップ / ホバーで切り替えできます。
              </p>
            </div>
          )}

          {/* 本文 */}
          <div className="mb-16">
            {bodyText.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base font-noto leading-[2] text-canvas-black/80 mb-6 whitespace-pre-line"
              >
                {para}
              </p>
            ))}
          </div>

          {/* 戻るリンク */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-inter text-canvas-muted hover:text-canvas-gold transition-colors"
          >
            <span>←</span>
            <span>ニュース・コラム一覧へ戻る</span>
          </Link>
        </div>
      </section>

      <CtaBanner
        label="CONTACT"
        title="お気軽にご相談ください"
        subtitle="物件探し・リノベーション・買取査定など、住まいのことなら何でもご相談いただけます。"
        buttonText="お問い合わせはこちら"
        buttonHref="/contact"
        variant="gold"
      />
    </>
  );
}
