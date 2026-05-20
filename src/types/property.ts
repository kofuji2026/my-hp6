export type PropertyStatus = "新着" | "成約済" | "リノベ済" | "買取";
export type PropertyType = "マンション" | "一戸建て" | "土地";

export interface Property {
  id: string;
  status: PropertyStatus;
  type: PropertyType;
  name: string;
  price: number;
  access: string;
  area: number;
  floorPlan: string;
  image: string;
  address: string;
  year: number;
}
