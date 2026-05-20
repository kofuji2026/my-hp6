"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PropertyCard from "@/components/cards/PropertyCard";
import { properties } from "@/data/properties";
import { cn } from "@/lib/utils";
import type { PropertyType } from "@/types/property";

type FilterType = "すべて" | PropertyType;
const FILTERS: FilterType[] = ["すべて", "マンション", "一戸建て", "土地"];

export default function PropertyListSection() {
  const [active, setActive] = useState<FilterType>("すべて");

  const filtered =
    active === "すべて" ? properties : properties.filter((p) => p.type === active);

  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-10">
          <SectionHeading
            label="REAL ESTATE"
            title="物件情報"
            subtitle="最新の物件情報をご紹介します。ご希望の条件でお気軽にご相談ください。"
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2 text-xs font-inter tracking-widest uppercase transition-all duration-200 cursor-pointer",
                active === f
                  ? "bg-canvas-black text-white"
                  : "border border-canvas-border text-canvas-muted hover:border-canvas-gold hover:text-canvas-gold"
              )}
            >
              {f}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((property) => (
            <motion.div key={property.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
