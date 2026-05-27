import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー | CANVAS REFORM",
  description: "キャンバスリフォーム株式会社のプライバシーポリシーです。",
};

const sections = [
  {
    title: "個人情報の収集について",
    body: "当社は、お問い合わせ・資料請求・査定申し込み等のサービス提供にあたり、お名前・メールアドレス・電話番号等の個人情報をご提供いただく場合があります。",
  },
  {
    title: "個人情報の利用目的",
    body: "収集した個人情報は、サービスの提供・改善、ご連絡、および法令に基づく対応のみに利用し、ご本人の同意なく第三者に提供することはありません。",
  },
  {
    title: "個人情報の管理",
    body: "当社は、個人情報の漏洩・滅失・毀損を防ぐため、適切な安全管理措置を講じます。委託先に個人情報を提供する場合も、適切な監督を行います。",
  },
  {
    title: "Cookie（クッキー）の使用",
    body: "当サイトでは、サービス向上のためCookieを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部サービスが正常に動作しない場合があります。",
  },
  {
    title: "個人情報の開示・訂正・削除",
    body: "ご本人からの個人情報の開示・訂正・削除のご要望には、ご本人確認のうえ合理的な範囲で対応いたします。お問い合わせページよりご連絡ください。",
  },
  {
    title: "プライバシーポリシーの変更",
    body: "本ポリシーは、法令の改正や業務内容の変更に応じて予告なく改定することがあります。最新の内容は本ページにてご確認ください。",
  },
  {
    title: "お問い合わせ",
    body: "個人情報の取り扱いに関するお問い合わせは、当社お問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy Policy"
        title="プライバシーポリシー"
        breadcrumb={[{ label: "プライバシーポリシー" }]}
      />

      {/* Content */}
      <div className="py-24 bg-canvas-bg">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-canvas-muted leading-relaxed mb-12">
            キャンバスリフォーム株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
            <br />
            <span className="text-xs text-canvas-muted/60 mt-2 block">
              ※ このサイトはポートフォリオ用デモサイトです。実在の会社ではありません。
            </span>
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-3">
                <h2 className="text-base font-noto font-bold text-canvas-black border-l-2 border-canvas-gold pl-4">
                  {section.title}
                </h2>
                <p className="text-sm text-canvas-muted leading-relaxed pl-4">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-canvas-muted/60 mt-16 text-right font-inter">
            制定日：2024年1月1日
          </p>
        </div>
      </div>
    </>
  );
}
