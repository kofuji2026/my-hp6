import type { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: "w1",
    title: "スケルトンリノベーション — 表参道 2LDK",
    location: "東京都渋谷区神宮前",
    area: 62,
    year: 2024,
    tags: ["全面リノベ", "スケルトン", "キッチン刷新"],
    beforeImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    description:
      "築30年のマンションを壁・床・天井すべてスケルトンから再設計。素材は無垢材とコンクリート風左官で統一し、居住者の美意識を空間に落とし込みました。",
  },
  {
    id: "w2",
    title: "キッチン・水回りリフォーム — 世田谷 一戸建て",
    location: "東京都世田谷区太子堂",
    area: 105,
    year: 2024,
    tags: ["水回り", "キッチン", "バスルーム"],
    beforeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    description:
      "築25年の戸建住宅のキッチンと浴室・洗面所を全面刷新。機能性とデザインを両立したアイランドキッチンと、ホテルライクなバスルームを実現しました。",
  },
  {
    id: "w3",
    title: "古民家フルリノベーション — 中目黒",
    location: "東京都目黒区上目黒",
    area: 132,
    year: 2023,
    tags: ["古民家", "断熱改修", "全面リノベ"],
    beforeImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description:
      "昭和初期の古民家を耐震補強・断熱改修を行いながら現代の生活様式に合わせてリノベーション。古い梁や柱をあえて見せることで、唯一無二の空間に仕上げました。",
  },
  {
    id: "w4",
    title: "ワンルーム → 1LDK 間取り変更 — 代官山",
    location: "東京都渋谷区猿楽町",
    area: 48,
    year: 2023,
    tags: ["間取り変更", "内装", "照明計画"],
    beforeImage: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    description:
      "ワンルームマンションの間取りを変更し1LDKに。壁を一枚増やすだけで生活クオリティが劇的に向上。照明計画も同時に行い、夜の表情にもこだわりました。",
  },
];
