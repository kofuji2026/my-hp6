import type { Work } from "@/types/work";

export const works: Work[] = [
  {
    id: "w1",
    title: "スケルトンリノベーション — 代官山 2LDK",
    location: "東京都渋谷区猿楽町",
    area: 62,
    year: 2026,
    tags: ["全面リノベ", "スケルトン", "キッチン刷新"],
    beforeImage: "/work1-before.png",
    afterImage: "/work1-after.png",
    description:
      "築20年のマンションを壁・床・天井すべてスケルトンから再設計。ホワイトオーク無垢材とアイランドキッチンを採用し、白を基調にした飽きのこないミニマルな空間に仕上げました。",
  },
  {
    id: "w2",
    title: "キッチン・水回りリフォーム — 世田谷 一戸建て",
    location: "東京都世田谷区太子堂",
    area: 105,
    year: 2024,
    tags: ["水回り", "キッチン", "バスルーム"],
    beforeImage: "/work2-before.png",
    afterImage: "/work2-after.png",
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
    beforeImage: "/work3-before.png",
    afterImage: "/work3-after.png",
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
    beforeImage: "/work4-before.png",
    afterImage: "/work4-after.png",
    description:
      "ワンルームマンションの間取りを変更し1LDKに。壁を一枚増やすだけで生活クオリティが劇的に向上。照明計画も同時に行い、夜の表情にもこだわりました。",
  },
];
