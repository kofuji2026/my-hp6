export interface StaffMember {
  id: string;
  photo: string;
  objectPosition?: string;
  name: string;
  nameEn: string;
  role: string;
  message: string;
}

export const staffMembers: StaffMember[] = [
  {
    id: "s1",
    photo: "/profile.png",
    objectPosition: "12% center",
    name: "高橋 拓也",
    nameEn: "Takuya Takahashi",
    role: "代表取締役 / 一級建築士",
    message:
      "「空間が人の暮らしを変える」という信念のもと、一棟一棟に真剣に向き合っています。",
  },
  {
    id: "s2",
    photo: "/profile.png",
    objectPosition: "37% center",
    name: "中村 彩香",
    nameEn: "Ayaka Nakamura",
    role: "インテリアデザイナー",
    message:
      "お客様の「好き」を丁寧にヒアリングし、暮らしに寄り添うデザインを提案します。",
  },
  {
    id: "s3",
    photo: "/profile.png",
    objectPosition: "63% center",
    name: "田中 雄介",
    nameEn: "Yusuke Tanaka",
    role: "不動産コンサルタント",
    message:
      "物件探しから資金計画まで、お客様の立場で最適な選択肢をご提案いたします。",
  },
  {
    id: "s4",
    photo: "/profile.png",
    objectPosition: "88% center",
    name: "山本 美咲",
    nameEn: "Misaki Yamamoto",
    role: "プロジェクトマネージャー",
    message:
      "施工から引き渡しまで、スケジュールと品質をしっかり管理して安心をお届けします。",
  },
];
