import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    num: "01",
    title: "査定申込",
    desc: "フォームまたはお電話でお申し込みください。",
  },
  {
    num: "02",
    title: "現地調査・査定",
    desc: "担当者が物件を調査し、市場価格を調査します。",
  },
  {
    num: "03",
    title: "査定結果のご報告",
    desc: "最短3日以内に査定額をご提示。ご納得いただけるまでご相談します。",
  },
];

export default function AssessmentSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="flex flex-col gap-6">
            <p className="text-[10px] font-inter tracking-[0.3em] uppercase text-canvas-gold">
              FREE ASSESSMENT
            </p>
            <h2 className="text-3xl md:text-4xl font-noto font-bold text-white leading-snug">
              不動産の無料査定
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              「いくらで売れるか知りたい」「まずは相談してみたい」—
              そんな方のために、完全無料の査定サービスをご用意しています。
              秘密厳守で対応いたしますので、お気軽にご連絡ください。
            </p>
            <Button href="/contact" variant="gold">
              無料査定を申し込む
            </Button>
          </AnimatedSection>

          <AnimatedSection stagger className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <span className="font-inter font-light text-4xl text-canvas-gold/40 leading-none min-w-[3rem]">
                  {step.num}
                </span>
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="text-sm font-noto font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
