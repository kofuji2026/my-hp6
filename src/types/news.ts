export type NewsCategory = "お知らせ" | "コラム" | "ニュース" | "施工事例";

export interface News {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  slug: string;
  body?: string;
  beforeImage?: string;
  afterImage?: string;
}
