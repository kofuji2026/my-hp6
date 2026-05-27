"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-canvas-black z-40 flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-inter font-bold text-lg tracking-widest text-white uppercase">
              {SITE.name}
            </span>
            <button
              onClick={onClose}
              aria-label="メニューを閉じる"
              className="text-white p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-1 px-8 gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-noto text-white/90 hover:text-canvas-gold transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + NAV_ITEMS.length * 0.07 }}
            >
              <Link
                href="/news"
                onClick={onClose}
                className="text-2xl font-noto text-white/90 hover:text-canvas-gold transition-colors"
              >
                ニュース・コラム
              </Link>
            </motion.div>
          </nav>

          <div className="px-8 pb-12 flex flex-col gap-3">
            <p className="text-white/40 text-xs font-inter tracking-widest uppercase">Contact</p>
            <a href={SITE.telHref} className="text-2xl font-inter text-white hover:text-canvas-gold transition-colors">
              {SITE.tel}
            </a>
            <p className="text-white/40 text-xs">{SITE.hours}（{SITE.holiday}）</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
