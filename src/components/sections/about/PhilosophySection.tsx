import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="flex flex-col gap-8">
            <SectionHeading
              label="PHILOSOPHY"
              title="私たちの哲学"
              subtitle="空間が人の暮らしを変える。私たちはその信念のもと、一棟一棟と真剣に向き合います。"
            />
            <div className="flex flex-col gap-5 text-sm text-canvas-muted leading-relaxed">
              <p>
                CANVAS REFORMは「白いキャンバスに、あなたの暮らしを描く」をコンセプトに、
                2018年に東京・渋谷で生まれたリノベーション専門の不動産会社です。
              </p>
              <p>
                リノベーションとは単なる改修工事ではありません。そこに住む人の価値観・
                ライフスタイル・将来像を深く理解し、最適な空間として具現化するクリエイティブな
                営みだと考えています。
              </p>
              <p>
                素材の選択、光の取り込み方、動線の設計—あらゆる要素に意味を持たせ、
                機能的でありながら美しい空間を生み出すこと。それが私たちの仕事です。
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85"
              alt="CANVAS REFORM philosophy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
