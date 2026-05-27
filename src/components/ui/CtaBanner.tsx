import Button from "@/components/ui/Button";

interface CtaBannerProps {
  label?: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  variant?: "gold" | "black";
}

export default function CtaBanner({
  label,
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = "gold",
}: CtaBannerProps) {
  const isBlack = variant === "black";

  return (
    <section className={isBlack ? "bg-canvas-black py-24" : "bg-canvas-gold py-24"}>
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        {label && (
          <p className="text-[10px] font-inter tracking-[0.4em] uppercase text-white/60">
            {label}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-noto font-bold text-white leading-snug">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-white/75 leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
        <Button
          href={buttonHref}
          variant={isBlack ? "gold" : "secondary"}
          className={
            isBlack
              ? undefined
              : "border-white text-white hover:bg-white hover:text-canvas-gold"
          }
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
