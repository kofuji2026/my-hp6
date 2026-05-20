import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";

const rows = [
  { label: "会社名", value: SITE.nameJa },
  { label: "代表取締役", value: SITE.ceo },
  { label: "設立", value: SITE.established },
  { label: "資本金", value: SITE.capital },
  { label: "従業員数", value: SITE.employees },
  { label: "所在地", value: `${SITE.zip} ${SITE.address}` },
  { label: "電話番号", value: SITE.tel },
  { label: "メール", value: SITE.email },
  { label: "営業時間", value: `${SITE.hours}（${SITE.holiday}）` },
  {
    label: "事業内容",
    value: "不動産売買・仲介・買取 / リフォーム施工 / フルリノベーション設計施工",
  },
  {
    label: "宅地建物取引業",
    value: "東京都知事（X）第XXXXX号",
  },
  {
    label: "建設業許可",
    value: "東京都知事許可（般-X）第XXXXXX号",
  },
];

export default function CompanyInfoSection() {
  return (
    <section className="py-24 md:py-32 bg-canvas-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading label="COMPANY" title="会社概要" />
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl">
          <table className="w-full text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-canvas-border">
                  <th className="py-4 pr-8 text-left font-noto font-medium text-canvas-black w-36 md:w-48 align-top">
                    {row.label}
                  </th>
                  <td className="py-4 text-canvas-muted leading-relaxed">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>
      </div>
    </section>
  );
}
