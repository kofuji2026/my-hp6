import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WorkCard from "@/components/cards/WorkCard";
import { works } from "@/data/works";

export default function WorksSection() {
  const featured = works.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-canvas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="WORKS"
            title="施工実績"
            subtitle="ホバーで Before → After をご覧いただけます。詳細はカードをクリック。"
          />
          <Button href="/reform" variant="secondary">
            施工実績一覧
          </Button>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((work) => (
            <WorkCard key={work.id} work={work} href={`/works/${work.id}`} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
