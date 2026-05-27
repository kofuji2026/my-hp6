import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WorkCard from "@/components/cards/WorkCard";
import { works } from "@/data/works";

export default function CaseStudySection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading
            label="WORKS"
            title="施工事例"
            subtitle="実際の施工事例をBefore / Afterでご覧ください。ホバーで変化が見え、クリックで詳細ページへ遷移します。"
          />
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} href={`/works/${work.id}`} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
