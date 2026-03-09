import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SummaryCardProps = {
  title: string;
  value: number;
  supportingText: string;
  statusPill?: string;
  statusTone?: "neutral" | "success" | "info" | "warning";
};

const statusToneClassName: Record<NonNullable<SummaryCardProps["statusTone"]>, string> = {
  neutral: "bg-[#F1F5F9] text-[#475569]",
  success: "bg-[#ECFDF5] text-[#047857]",
  info: "bg-[#EEF2FF] text-[#3730A3]",
  warning: "bg-[#FFFBEB] text-[#B45309]",
};

export function SummaryCard({
  title,
  value,
  supportingText,
  statusPill,
  statusTone = "neutral",
}: SummaryCardProps) {
  return (
    <Card className="rounded-xl border border-[#E2E8F0] bg-white py-0 shadow-none ring-0">
      <CardHeader className="px-5 pt-4 pb-0">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm font-medium text-[#475569]">{title}</CardTitle>
          {statusPill ? (
            <span
              className={cn(
                "inline-flex h-6 items-center rounded-full px-2 text-[11px] font-bold",
                statusToneClassName[statusTone],
              )}
            >
              {statusPill}
            </span>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="px-5 pt-3 pb-4">
        <p className="text-4xl leading-none font-semibold tracking-tight text-[#0F172A]">{value}</p>
        <p className="mt-2 text-sm text-[#64748B]">{supportingText}</p>
      </CardContent>
    </Card>
  );
}
