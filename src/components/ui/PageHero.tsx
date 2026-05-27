import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ label, title, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 bg-canvas-surface border-b border-canvas-border">
      <div className="max-w-7xl mx-auto px-6">
        {breadcrumb && (
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-canvas-muted font-inter mb-6">
            <Link href="/" className="hover:text-canvas-gold transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-canvas-gold transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-canvas-black">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="text-[10px] font-inter tracking-[0.3em] uppercase text-canvas-gold mb-3">
          {label}
        </p>
        <h1 className="text-4xl md:text-5xl font-noto font-bold text-canvas-black">{title}</h1>
      </div>
    </section>
  );
}
