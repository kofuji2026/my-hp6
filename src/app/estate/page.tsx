import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PropertyListSection from "@/components/sections/estate/PropertyListSection";
import AssessmentSection from "@/components/sections/estate/AssessmentSection";

export const metadata: Metadata = {
  title: "不動産事業",
  description: "CANVAS REFORMの物件情報一覧。マンション・一戸建て・土地の売買・買取査定を承っております。",
};

export default function EstatePage() {
  return (
    <>
      <PageHero
        label="REAL ESTATE"
        title="不動産事業"
        breadcrumb={[{ label: "不動産事業" }]}
      />
      <PropertyListSection />
      <AssessmentSection />
    </>
  );
}
