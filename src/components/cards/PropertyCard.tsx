import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group bg-white border border-canvas-border hover:border-canvas-gold/50 transition-all duration-300 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <Badge status={property.status} />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs text-canvas-muted font-inter">
          <span>{property.type}</span>
          {property.year > 0 && (
            <>
              <span className="w-px h-3 bg-canvas-border" />
              <span>築{property.year}年</span>
            </>
          )}
          {property.floorPlan !== "—" && (
            <>
              <span className="w-px h-3 bg-canvas-border" />
              <span>{property.floorPlan}</span>
            </>
          )}
        </div>
        <h3 className="text-sm font-noto font-medium text-canvas-black leading-snug line-clamp-2">
          {property.name}
        </h3>
        <p className="text-xl font-inter font-light text-canvas-black">
          {property.price.toLocaleString()}
          <span className="text-sm ml-1 text-canvas-muted">万円</span>
        </p>
        <div className="flex flex-col gap-1 text-xs text-canvas-muted">
          <p>{property.access}</p>
          <p>
            {property.area}㎡ / {property.address}
          </p>
        </div>
      </div>
    </div>
  );
}
