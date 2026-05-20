import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gold";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-canvas-black text-white border border-canvas-black hover:bg-transparent hover:text-canvas-black",
  secondary:
    "bg-transparent text-canvas-black border border-canvas-black hover:bg-canvas-black hover:text-white",
  ghost:
    "bg-transparent text-canvas-muted border border-canvas-border hover:border-canvas-gold hover:text-canvas-gold",
  gold:
    "bg-canvas-gold text-white border border-canvas-gold hover:bg-canvas-gold-lt hover:border-canvas-gold-lt",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-inter font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer select-none";

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {children}
    </button>
  );
}
