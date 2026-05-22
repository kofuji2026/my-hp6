import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "ヒアリング・ご相談",
    desc: "お客様のご要望・ライフスタイル・ご予算をじっくりとお伺いします。初回相談は無料です。",
  },
  {
    num: "02",
    title: "現地調査・プラン作成",
    desc: "物件を調査し、構造・設備の状態を確認します。その後、設計士がプランと見積もりを作成します。",
  },
  {
    num: "03",
    title: "プレゼンテーション",
    desc: "3Dパース・サンプルボードを使ってプランをご提案。ご要望に合わせて何度でも修正します。",
  },
  {
    num: "04",
    title: "施工",
    desc: "専任のプロジェクトマネージャーが工程・品質を管理。定期的に進捗をご報告します。",
  },
  {
    num: "05",
    title: "お引き渡し・アフターサポート",
    desc: "完成後の内覧・確認を経てお引き渡し。引き渡し後1年間の無償点検を実施します。",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading
            label="FLOW"
            title="施工の流れ"
            subtitle="初回相談からお引き渡しまで、すべてのプロセスを丁寧にサポートします。"
          />
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl flex flex-col">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-6 relative">
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[1.25rem] top-10 w-px h-full bg-canvas-border" />
              )}
              <div className="flex-shrink-0 w-10 h-10 bg-canvas-gold flex items-center justify-center text-white font-inter text-xs font-medium z-10">
                {step.num}
              </div>
              <div className="flex flex-col gap-1 pb-10">
                <h3 className="text-base font-noto font-bold text-canvas-black">{step.title}</h3>
                <p className="text-sm text-canvas-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
