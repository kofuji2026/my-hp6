export interface StaffMember {
  id: string;
  photo: string;
  name: string;
  nameEn: string;
  role: string;
  message: string;
}

export const staffMembers: StaffMember[] = [
  {
    id: "s1",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    name: "高橋 拓也",
    nameEn: "Takuya Takahashi",
    role: "代表取締役 / 一級建築士",
    message:
      "「空間が人の暮らしを変える」という信念のもと、一棟一棟に真剣に向き合っています。",
  },
  {
    id: "s2",
    photo: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&q=80",
    name: "中村 彩香",
    nameEn: "Ayaka Nakamura",
    role: "インテリアデザイナー",
    message:
      "お客様の「好き」を丁寧にヒアリングし、暮らしに寄り添うデザインを提案します。",
  },
  {
    id: "s3",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    name: "田中 雄介",
    nameEn: "Yusuke Tanaka",
    role: "不動産コンサルタント",
    message:
      "物件探しから資金計画まで、お客様の立場で最適な選択肢をご提案いたします。",
  },
  {
    id: "s4",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    name: "山本 美咲",
    nameEn: "Misaki Yamamoto",
    role: "プロジェクトマネージャー",
    message:
      "施工から引き渡しまで、スケジュールと品質をしっかり管理して安心をお届けします。",
  },
];
