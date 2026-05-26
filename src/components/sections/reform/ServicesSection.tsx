import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const serviceList = [
  {
    icon: "🚿",
    title: "水回りリフォーム",
    desc: "キッチン・浴室・洗面所・トイレを機能的かつ美しくリニューアル。使い勝手と清潔感を両立します。",
    tags: ["キッチン", "バスルーム", "洗面所", "トイレ"],
  },
  {
    icon: "🪟",
    title: "内装・インテリアリフォーム",
    desc: "フローリング・壁紙・照明計画を刷新。住まいの雰囲気を根本から変えます。",
    tags: ["床材", "壁紙", "照明", "収納"],
  },
  {
    icon: "🏗️",
    title: "全面リノベーション",
    desc: "スケルトンから設計し直す全面リノベーション。間取り変更・断熱改修・耐震補強も対応。",
    tags: ["スケルトン", "間取り変更", "断熱", "耐震"],
  },
  {
    icon: "🏢",
    title: "投資用物件リノベ",
    desc: "賃貸収益を最大化するための物件リノベーション。入居率アップを目指したデザインを提案します。",
    tags: ["賃貸改修", "収益最大化", "デザイナーズ"],
  },
];

export default function ServicesSection() {
  return (
    <section id="renovation" className="py-24 md:py-32 bg-canvas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading
            label="SERVICES"
            title="サービス内容"
            subtitle="小規模なリフォームから全面リノベーションまで、幅広いニーズに対応します。"
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service) => (
            <div
              key={service.title}
              className="bg-canvas-bg border border-canvas-border p-8 hover:border-canvas-gold/50 transition-colors duration-300"
            >
              <div className="flex flex-col gap-4">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-lg font-noto font-bold text-canvas-black">{service.title}</h3>
                <p className="text-sm text-canvas-muted leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-inter px-2 py-0.5 border border-canvas-gold/30 text-canvas-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
