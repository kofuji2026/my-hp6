import { cn } from "@/lib/utils";
import type { PropertyStatus } from "@/types/property";

const statusColors: Record<PropertyStatus, string> = {
  新着: "bg-canvas-gold text-white",
  成約済: "bg-zinc-400 text-white",
  リノベ済: "bg-emerald-600 text-white",
  買取: "bg-canvas-black text-white",
};

interface BadgeProps {
  status: PropertyStatus;
  className?: string;
}

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-inter font-medium tracking-widest uppercase",
        statusColors[status],
        className
      )}
    >
      {status}
    </span>
  );
}
