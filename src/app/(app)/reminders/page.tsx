import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function RemindersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reminders" description="Keep track of follow-ups and deadlines." />
      <EmptyState title="Reminders module scaffold" description="Ready for scheduling and notifications." />
    </div>
  );
}
