import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PhilosophySection from "@/components/sections/about/PhilosophySection";
import CompanyInfoSection from "@/components/sections/about/CompanyInfoSection";
import StaffSection from "@/components/sections/about/StaffSection";

export const metadata: Metadata = {
  title: "私たちについて",
  description: "CANVAS REFORMの理念・会社概要・スタッフ紹介。リノベーション専門の不動産会社として東京渋谷を拠点に活動しています。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT"
        title="私たちについて"
        breadcrumb={[{ label: "私たちについて" }]}
      />
      <PhilosophySection />
      <CompanyInfoSection />
      <StaffSection />
    </>
  );
}
