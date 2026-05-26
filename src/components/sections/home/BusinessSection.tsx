"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

const services = [
  {
    label: "REAL ESTATE",
    title: "不動産事業",
    description:
      "物件の購入・売却・買取査定まで一貫サポート。お客様の理想の住まいを見つけるお手伝いをします。",
    href: "/estate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "REFORM",
    title: "リフォーム事業",
    description:
      "水回りから内装まで、機能性とデザインを両立したリフォームで、今の住まいをより快適に。",
    href: "/reform",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "RENOVATION",
    title: "リノベーション事業",
    description:
      "スケルトンから再設計する全面リノベーション。理想の空間を白紙から創り出します。",
    href: "/reform#renovation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function BusinessSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <SectionHeading
            label="BUSINESS"
            title="私たちの事業"
            subtitle="不動産売買からリノベーションまで、住まいのすべてをワンストップでサポートします。"
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-canvas-border">
          {services.map((service) => (
            <motion.div key={service.label} variants={fadeUp}>
              <Link
                href={service.href}
                className="group flex flex-col gap-6 p-8 md:p-10 bg-canvas-bg hover:bg-canvas-surface transition-colors duration-300"
              >
                <div className="text-canvas-gold group-hover:text-canvas-gold-lt transition-colors">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-inter tracking-[0.3em] text-canvas-gold uppercase">
                    {service.label}
                  </p>
                  <h3 className="text-xl font-noto font-bold text-canvas-black">{service.title}</h3>
                  <p className="text-sm text-canvas-muted leading-relaxed">{service.description}</p>
                </div>
                <span className="text-xs font-inter tracking-widest uppercase text-canvas-gold group-hover:gap-3 flex items-center gap-2 transition-all">
                  詳しく見る
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
