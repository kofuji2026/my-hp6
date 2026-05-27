import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { works } from "@/data/works";
import PageHero from "@/components/ui/PageHero";
import BeforeAfterImage from "@/components/ui/BeforeAfterImage";
import CtaBanner from "@/components/ui/CtaBanner";

export async function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  return (
    <>
      <PageHero
        label="WORKS"
        title={work.title}
        breadcrumb={[
          { label: "リフォーム・リノベーション", href: "/reform" },
          { label: work.title },
        ]}
      />

      {/* 詳細セクション */}
      <section className="py-24 bg-canvas-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Before/After 画像 */}
            <BeforeAfterImage
              beforeSrc={work.beforeImage}
              afterSrc={work.afterImage}
              title={work.title}
            />

            {/* 詳細情報 */}
            <div className="flex flex-col gap-6">
              {/* タグ */}
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-inter px-3 py-1 border border-canvas-gold/40 text-canvas-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* スペック */}
              <dl className="flex flex-col divide-y divide-canvas-border border-t border-canvas-border">
                {[
                  { label: "エリア", value: work.location },
                  { label: "面積", value: `${work.area}㎡` },
                  { label: "施工年", value: `${work.year}年` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 py-3">
                    <dt className="w-20 shrink-0 text-xs font-inter text-canvas-muted tracking-wide">
                      {label}
                    </dt>
                    <dd className="text-sm font-noto text-canvas-black">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* 説明文 */}
              <p className="text-sm font-noto leading-[2] text-canvas-black/80">
                {work.description}
              </p>

              {/* CTAボタン */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-inter font-medium tracking-widest uppercase bg-canvas-gold text-white border border-canvas-gold hover:bg-canvas-gold-lt hover:border-canvas-gold-lt transition-all duration-300"
              >
                同様の施工を相談する
              </Link>
            </div>
          </div>

          {/* 戻るリンク */}
          <div className="mt-16 pt-8 border-t border-canvas-border">
            <Link
              href="/reform"
              className="inline-flex items-center gap-2 text-sm font-inter text-canvas-muted hover:text-canvas-gold transition-colors"
            >
              <span>←</span>
              <span>施工事例一覧へ戻る</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        label="FREE ESTIMATE"
        title="このような施工についてご相談ください"
        subtitle="現地調査・お見積もりは無料です。まずはお気軽にお問い合わせください。"
        buttonText="リフォームの相談をする"
        buttonHref="/contact"
        variant="black"
      />
    </>
  );
}
