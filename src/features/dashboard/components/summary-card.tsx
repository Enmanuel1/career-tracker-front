import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SummaryCardProps = {
  title: string;
  value: number;
  supportingText: string;
};

export function SummaryCard({ title, value, supportingText }: SummaryCardProps) {
  return (
    <Card className="h-40 rounded-2xl border border-[#E2E8F0] bg-white py-0 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-0">
      <CardHeader className="px-5 pt-4 pb-1">
        <CardTitle className="text-base font-medium text-[#334155]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between px-5 pb-4">
        <p className="text-[46px] leading-none font-semibold tracking-tight text-[#0F172A]">{value}</p>
        <p className="pt-1 text-sm text-[#64748B]">{supportingText}</p>
      </CardContent>
    </Card>
  );
}
