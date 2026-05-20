import { cn } from "@/lib/utils";
import SectionLabel from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className,
  centered,
  light,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      <SectionLabel light={light}>{label}</SectionLabel>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-noto font-bold leading-snug",
          light ? "text-white" : "text-canvas-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed max-w-xl",
            light ? "text-white/70" : "text-canvas-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
