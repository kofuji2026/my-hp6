import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NewsCard from "@/components/cards/NewsCard";
import { newsItems } from "@/data/news";

export default function NewsSection() {
  const latest = newsItems.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-canvas-bg">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            label="JOURNAL"
            title="ニュース・コラム"
          />
          <Button href="/news" variant="ghost">
            一覧を見る
          </Button>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col">
          {latest.map((news) => (
            <NewsCard key={news.id} news={news} href={`/news/${news.slug}`} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
