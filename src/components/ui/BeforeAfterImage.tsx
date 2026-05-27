"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  title: string;
  className?: string;
}

export default function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  title,
  className = "",
}: BeforeAfterImageProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden cursor-pointer select-none ${className}`}
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter((v) => !v)}
    >
      <Image
        src={beforeSrc}
        alt={`${title} before`}
        fill
        className={`object-cover transition-opacity duration-500 ${showAfter ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <Image
        src={afterSrc}
        alt={`${title} after`}
        fill
        className={`object-cover transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute bottom-3 left-3">
        <span
          className={`text-[10px] font-inter px-3 py-1.5 transition-colors duration-300 ${
            showAfter ? "bg-canvas-gold text-white" : "bg-black/60 text-white"
          }`}
        >
          {showAfter ? "AFTER" : "BEFORE"}
        </span>
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="text-[10px] font-inter px-2 py-1 bg-black/40 text-white/80">
          タップ / ホバーで切替
        </span>
      </div>
    </div>
  );
}
