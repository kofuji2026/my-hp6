import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import AccessMapSection from "@/components/sections/contact/AccessMapSection";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "CANVAS REFORMへのお問い合わせ・来店予約・無料査定のお申し込みはこちら。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        breadcrumb={[{ label: "お問い合わせ" }]}
      />
      <ContactFormSection />
      <AccessMapSection />
    </>
  );
}
