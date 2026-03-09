import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  Calendar03Icon,
  File02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

import type { DashboardActivityItem } from "@/features/dashboard/types/dashboard.types";

type RecentActivityPanelProps = {
  items: DashboardActivityItem[];
};

const iconByType: Record<DashboardActivityItem["type"], React.ComponentProps<typeof HugeiconsIcon>["icon"]> = {
  application: Briefcase01Icon,
  interview: Calendar03Icon,
  resume: File02Icon,
  message: Mail01Icon,
};

const iconBackgroundByType: Record<DashboardActivityItem["type"], string> = {
  application: "bg-[#ECFDF5] text-[#059669]",
  interview: "bg-[#E0EAFF] text-[#2563EB]",
  resume: "bg-[#F3E8FF] text-[#7C3AED]",
  message: "bg-[#FEF3C7] text-[#C2410C]",
};

export function RecentActivityPanel({ items }: RecentActivityPanelProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">
        <h2 className="text-xl font-semibold text-[#0F172A]">Recent Activity</h2>
        <button type="button" className="cursor-pointer text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]">
          View all
        </button>
      </div>

      <div>
        {items.map((item) => (
          <article key={item.id} className="flex items-start gap-4 border-b border-[#E2E8F0] px-6 py-5 last:border-b-0">
            <div
              className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl ${iconBackgroundByType[item.type]}`}
            >
              <HugeiconsIcon icon={iconByType[item.type]} strokeWidth={1.9} className="size-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className=" font-semibold leading-tight text-[#0F172A]">{item.title}</h3>
              <p className="mt-1 text-base text-[#475569]">{item.description}</p>
            </div>

            <span className="pt-1 text-sm text-[#64748B]">{item.timestampLabel}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
