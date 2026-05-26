import HeroSection from "@/components/sections/home/HeroSection";
import BusinessSection from "@/components/sections/home/BusinessSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import WorksSection from "@/components/sections/home/WorksSection";
import NewsSection from "@/components/sections/home/NewsSection";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessSection />
      <WhyUsSection />
      <WorksSection />
      <NewsSection />

      {/* CTA Banner */}
      <section className="py-20 bg-canvas-gold">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <p className="text-[10px] font-inter tracking-[0.4em] uppercase text-white/70">
            Free Assessment
          </p>
          <h2 className="text-2xl md:text-3xl font-noto font-bold text-white leading-snug">
            不動産の無料査定を承っています
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            売りたい・貸したい・リノベーションしたい—<br />
            まずはお気軽にご相談ください。最短3日で査定結果をお届けします。
          </p>
          <Button href="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-canvas-gold">
            無料査定を申し込む
          </Button>
        </div>
      </section>
    </>
  );
}
