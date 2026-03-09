import { Button } from "@/components/ui/button";
import type { DashboardReminderItem } from "@/features/dashboard/types/dashboard.types";

type UpcomingRemindersPanelProps = {
  items: DashboardReminderItem[];
};

const urgencyLabel: Record<DashboardReminderItem["urgency"], string> = {
  TODAY: "TODAY",
  IN_2_DAYS: "IN 2 DAYS",
  THIS_WEEK: "IN 5 DAYS",
};

const urgencyClassName: Record<DashboardReminderItem["urgency"], string> = {
  TODAY: "text-[#4338CA]",
  IN_2_DAYS: "text-[#475569]",
  THIS_WEEK: "text-[#475569]",
};

const leftAccentClassName: Record<DashboardReminderItem["urgency"], string> = {
  TODAY: "border-l-[#4F46E5]",
  IN_2_DAYS: "border-l-[#CBD5E1]",
  THIS_WEEK: "border-l-[#CBD5E1]",
};

export function UpcomingRemindersPanel({ items }: UpcomingRemindersPanelProps) {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="mb-4 border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-semibold text-[#0F172A]">Upcoming Reminders</h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className={`rounded-xl border border-[#E2E8F0] border-l-4 bg-[#F8FAFC] px-4 py-3 ${leftAccentClassName[item.urgency]}`}
          >
            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="font-semibold leading-tight text-[#0F172A]">{item.title}</h3>
              <span className={`text-xs font-semibold ${urgencyClassName[item.urgency]}`}>
                {urgencyLabel[item.urgency]}
              </span>
            </div>
            <p className="text-sm leading-snug text-[#475569]">{item.description}</p>
          </article>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-5 h-10 w-full cursor-pointer border-[#CBD5E1] bg-white text-[#4F46E5] hover:bg-[#EEF2FF]"
      >
        + Add New Reminder
      </Button>
    </section>
  );
}
