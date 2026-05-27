"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // トップページ以外は常に白背景・黒文字（下層ページはヒーロー画像がないため）
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-7 left-0 right-0 z-30 transition-all duration-500",
          solid
            ? "bg-white/95 backdrop-blur-sm border-b border-canvas-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className={cn(
                "font-inter font-bold text-lg tracking-[0.15em] uppercase transition-colors duration-300",
                solid ? "text-canvas-black" : "text-white"
              )}
            >
              {SITE.name}
            </span>
            <span
              className={cn(
                "text-[9px] font-inter tracking-widest transition-colors duration-300",
                solid ? "text-canvas-muted" : "text-white/60"
              )}
            >
              {SITE.nameJa}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-noto font-medium tracking-wide transition-colors duration-300 hover:text-canvas-gold",
                  solid ? "text-canvas-black" : "text-white/90"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA group */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.telHref}
              className={cn(
                "text-sm font-inter font-medium tracking-wide transition-colors duration-300 hover:text-canvas-gold",
                solid ? "text-canvas-black" : "text-white"
              )}
            >
              {SITE.tel}
            </a>
            <Link
              href="/contact"
              className="bg-canvas-gold text-white px-5 py-2 text-xs font-inter font-medium tracking-widest uppercase hover:bg-canvas-gold-lt transition-colors duration-300"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
            className={cn(
              "lg:hidden p-2 transition-colors",
              solid ? "text-canvas-black" : "text-white"
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
