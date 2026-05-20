"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const facts = [
  { value: 280, unit: "件+", label: "施工実績" },
  { value: 150, unit: "件+", label: "買取実績" },
  { value: 98, unit: "%", label: "顧客満足度" },
  { value: 23, unit: "区市", label: "対応エリア" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-canvas-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <SectionHeading
            label="WHY CANVAS REFORM"
            title="選ばれる理由"
            subtitle="数字が証明する、私たちの実績と信頼。"
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col items-center justify-center gap-2 py-12 px-6 bg-canvas-black hover:bg-white/5 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-inter font-light text-white">
                <CountUp target={fact.value} inView={inView} />
                <span className="text-canvas-gold text-2xl ml-1">{fact.unit}</span>
              </p>
              <p className="text-xs font-inter tracking-[0.2em] text-white/50 uppercase">
                {fact.label}
              </p>
            </div>
          ))}
        </div>

        <AnimatedSection className="mt-16 max-w-2xl">
          <p className="text-white/50 text-sm leading-relaxed">
            2018年の創業以来、東京都内を中心に累計280件以上の施工実績。
            設計・施工・不動産取引を一気通貫で手がけることで、クオリティと
            スピードを高い水準で維持しています。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
