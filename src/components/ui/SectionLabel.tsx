import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs tracking-[0.3em] uppercase font-inter font-medium",
        light ? "text-canvas-gold-lt" : "text-canvas-gold",
        className
      )}
    >
      {children}
    </p>
  );
}
