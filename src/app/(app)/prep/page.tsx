import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function PrepPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Interview Prep" description="Prepare answers, notes, and practice sessions." />
      <EmptyState title="Prep module scaffold" description="Ready for interview prep assets and notes." />
    </div>
  );
}
