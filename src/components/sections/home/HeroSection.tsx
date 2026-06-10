import Image from "next/image";
import Button from "@/components/ui/Button";
import ScrollIndicator from "@/components/layout/ScrollIndicator";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1800&q=85"
        alt="CANVAS REFORM hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-[10px] md:text-xs font-inter tracking-[0.4em] uppercase text-canvas-gold mb-6">
          Real estate. Reform. Renovation.
        </p>
        <h1 className="font-noto font-light text-[2rem] md:text-5xl lg:text-6xl text-white mb-6 leading-snug tracking-[0.06em]">
          住まい探しから、<br />
          理想の暮らしづくりまで。
        </h1>
        <p className="text-sm md:text-base font-noto text-white/75 mb-10 max-w-xl mx-auto leading-relaxed tracking-wide">
          一都三県の中古物件購入からリノベーション完成まで<br />すべてワンストップでご相談いただけます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/estate" variant="gold">
            物件を見る
          </Button>
          <Button href="/reform" variant="secondary" className="border-white text-white hover:bg-white hover:text-canvas-black">
            施工事例を見る
          </Button>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
