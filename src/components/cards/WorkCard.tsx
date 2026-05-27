"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/types/work";

interface WorkCardProps {
  work: Work;
  href?: string;
}

export default function WorkCard({ work, href }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      className="group overflow-hidden bg-white border border-canvas-border hover:border-canvas-gold/50 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={href ? undefined : () => setHovered((v) => !v)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.beforeImage}
          alt={`${work.title} before`}
          fill
          className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src={work.afterImage}
          alt={`${work.title} after`}
          fill
          className={`object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className={`text-[10px] font-inter px-2 py-1 transition-colors duration-300 ${hovered ? "bg-canvas-gold text-white" : "bg-black/60 text-white"}`}>
            {hovered ? "AFTER" : "BEFORE"}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex flex-wrap gap-1">
          {work.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-inter px-2 py-0.5 border border-canvas-border text-canvas-muted">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-noto font-medium text-canvas-black leading-snug group-hover:text-canvas-gold transition-colors">
          {work.title}
        </h3>
        <p className="text-xs text-canvas-muted line-clamp-2 leading-relaxed">
          {work.description}
        </p>
        <div className="flex gap-4 text-xs text-canvas-muted font-inter">
          <span>{work.area}㎡</span>
          <span>{work.year}年施工</span>
          <span>{work.location}</span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}
