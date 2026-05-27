import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CaseStudySection from "@/components/sections/reform/CaseStudySection";
import ServicesSection from "@/components/sections/reform/ServicesSection";
import ProcessSection from "@/components/sections/reform/ProcessSection";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "リフォーム・リノベーション事業",
  description: "CANVAS REFORMのリフォーム・リノベーション事業。施工事例・サービス内容・施工の流れをご紹介します。",
};

export default function ReformPage() {
  return (
    <>
      <PageHero
        label="REFORM & RENOVATION"
        title="リフォーム・リノベーション"
        breadcrumb={[{ label: "リフォーム・リノベーション" }]}
      />
      <CaseStudySection />
      <ServicesSection />
      <ProcessSection />
      <CtaBanner
        label="FREE ESTIMATE"
        title="リフォーム・リノベーションのご相談はこちら"
        subtitle="現地調査・お見積もりは無料です。まずはお気軽にお問い合わせください。担当スタッフが丁寧にご対応いたします。"
        buttonText="無料見積もりを依頼する"
        buttonHref="/contact"
        variant="black"
      />
    </>
  );
}
