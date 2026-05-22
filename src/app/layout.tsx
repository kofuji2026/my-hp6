import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-var",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const noto = Noto_Sans_JP({
  variable: "--font-noto-var",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CANVAS REFORM | リノベーション・不動産",
    template: "%s | CANVAS REFORM",
  },
  description:
    "東京渋谷のリノベーション専門不動産会社。全面リノベーション・リフォーム・不動産売買・買取査定まで一貫サポート。Your space. Reimagined.",
  keywords: ["リノベーション", "不動産", "リフォーム", "渋谷", "買取", "東京"],
  openGraph: {
    siteName: "CANVAS REFORM",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${playfair.variable} ${noto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
          <div className="bg-canvas-black text-white/60 text-center text-[10px] font-inter tracking-[0.2em] py-1.5 uppercase">
            Demo Site — ポートフォリオ用デモサイトです。実在の会社ではありません。
          </div>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
        </body>
    </html>
  );
}
