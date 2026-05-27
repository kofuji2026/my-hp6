import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import PageHero from "@/components/ui/PageHero";
import Badge from "@/components/ui/Badge";
import CtaBanner from "@/components/ui/CtaBanner";

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) return {};
  return {
    title: property.name,
    description: `${property.name} | ${property.access} | ${property.area}㎡ / ${property.floorPlan} | ${property.price.toLocaleString()}万円`,
  };
}

export default async function EstateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const specs = [
    { label: "物件種別", value: property.type },
    { label: "所在地", value: property.address },
    { label: "交通", value: property.access },
    { label: "専有面積", value: `${property.area}㎡` },
    ...(property.floorPlan !== "—" ? [{ label: "間取り", value: property.floorPlan }] : []),
    ...(property.year > 0 ? [{ label: "築年数", value: `築${property.year}年` }] : []),
  ];

  return (
    <>
      <PageHero
        label="REAL ESTATE"
        title={property.name}
        breadcrumb={[
          { label: "不動産事業", href: "/estate" },
          { label: property.name },
        ]}
      />

      {/* 詳細セクション */}
      <section className="py-24 bg-canvas-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 物件画像 */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-3 left-3">
                <Badge status={property.status} />
              </div>
            </div>

            {/* スペック */}
            <div className="flex flex-col gap-6">
              {/* 価格 */}
              <div className="pb-6 border-b border-canvas-border">
                <p className="text-xs font-inter text-canvas-muted mb-1">販売価格</p>
                <p className="text-3xl font-inter font-light text-canvas-black">
                  {property.price.toLocaleString()}
                  <span className="text-base ml-1 text-canvas-muted">万円</span>
                </p>
              </div>

              {/* スペック一覧 */}
              <dl className="flex flex-col divide-y divide-canvas-border border-t border-canvas-border">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex gap-4 py-3">
                    <dt className="w-24 shrink-0 text-xs font-inter text-canvas-muted tracking-wide">
                      {label}
                    </dt>
                    <dd className="text-sm font-noto text-canvas-black">{value}</dd>
                  </div>
                ))}
              </dl>

              {/* CTAボタン */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-inter font-medium tracking-widest uppercase bg-canvas-gold text-white border border-canvas-gold hover:bg-canvas-gold-lt hover:border-canvas-gold-lt transition-all duration-300 w-full"
              >
                内見・査定を申し込む
              </Link>
              <p className="text-[10px] text-canvas-muted text-center -mt-2">
                ※ 内見・査定のご相談は無料です
              </p>
            </div>
          </div>

          {/* 地図プレースホルダー */}
          <div className="mt-16 aspect-video bg-canvas-surface border border-canvas-border flex items-center justify-center">
            <p className="text-xs text-canvas-muted font-inter">
              地図はデモサイトのため省略しています
            </p>
          </div>

          {/* 戻るリンク */}
          <div className="mt-12 pt-8 border-t border-canvas-border">
            <Link
              href="/estate"
              className="inline-flex items-center gap-2 text-sm font-inter text-canvas-muted hover:text-canvas-gold transition-colors"
            >
              <span>←</span>
              <span>物件一覧へ戻る</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        label="CONTACT"
        title="この物件についてお気軽にご相談ください"
        subtitle="内見のご予約・資金計画のご相談・リノベーションとのセットプランなど、何でもお気軽にどうぞ。"
        buttonText="内見・査定を申し込む"
        buttonHref="/contact"
        variant="black"
      />
    </>
  );
}
