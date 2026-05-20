import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";

export default function AccessMapSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading label="ACCESS" title="アクセス" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <AnimatedSection className="aspect-[4/3] overflow-hidden border border-canvas-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.748!2d139.7083!3d35.659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzMyLjQiTiAxMznCsDQyJzMwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CANVAS REFORM アクセスマップ"
            />
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-inter tracking-[0.3em] uppercase text-canvas-gold">
                Office
              </p>
              <div className="flex flex-col gap-3 text-sm text-canvas-muted">
                <div>
                  <p className="text-xs text-canvas-black font-medium mb-1">所在地</p>
                  <p>{SITE.zip}</p>
                  <p>{SITE.address}</p>
                </div>
                <div>
                  <p className="text-xs text-canvas-black font-medium mb-1">アクセス</p>
                  <p>{SITE.access}</p>
                </div>
                <div>
                  <p className="text-xs text-canvas-black font-medium mb-1">電話番号</p>
                  <a href={SITE.telHref} className="hover:text-canvas-gold transition-colors">
                    {SITE.tel}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-canvas-black font-medium mb-1">メール</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-canvas-gold transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-canvas-black font-medium mb-1">営業時間</p>
                  <p>
                    {SITE.hours}（{SITE.holiday}）
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-canvas-border p-6 bg-canvas-bg">
              <p className="text-xs text-canvas-muted leading-relaxed">
                <span className="font-medium text-canvas-black">来店予約</span>について<br />
                ご来店の際は事前にお電話またはメールでご予約いただけますと
                スムーズにご案内できます。お気軽にご連絡ください。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
