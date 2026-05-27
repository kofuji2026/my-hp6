import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsListSection from "@/components/sections/news/NewsListSection";

export const metadata: Metadata = {
  title: "ニュース・コラム",
  description: "CANVAS REFORMからのお知らせ、施工事例レポート、住まいに関するコラムをお届けします。",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="JOURNAL"
        title="ニュース・コラム"
        breadcrumb={[{ label: "ニュース・コラム" }]}
      />
      <NewsListSection />
    </>
  );
}
