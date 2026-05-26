import Image from "next/image";
import type { StaffMember } from "@/data/staff";

interface StaffCardProps {
  staff: StaffMember;
}

export default function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[3/4] overflow-hidden bg-canvas-surface">
        <Image
          src={staff.photo}
          alt={staff.name}
          fill
          className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[10px] font-inter tracking-widest text-canvas-gold uppercase">
          {staff.nameEn}
        </p>
        <h3 className="text-lg font-noto font-bold text-canvas-black">{staff.name}</h3>
        <p className="text-xs text-canvas-muted leading-snug">{staff.role}</p>
        <p className="text-sm text-canvas-muted leading-relaxed mt-2 border-l-2 border-canvas-gold pl-3">
          {staff.message}
        </p>
      </div>
    </div>
  );
}
