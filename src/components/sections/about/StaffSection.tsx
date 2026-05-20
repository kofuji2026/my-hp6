import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaffCard from "@/components/cards/StaffCard";
import { staffMembers } from "@/data/staff";

export default function StaffSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading
            label="STAFF"
            title="スタッフ紹介"
            subtitle="それぞれの専門性を活かして、最高のチームでお客様をサポートします。"
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
