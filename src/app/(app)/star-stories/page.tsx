import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function StarStoriesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="STAR Stories" description="Capture behavioral stories for interviews." />
      <EmptyState title="STAR stories scaffold" description="Ready for story templates and tagging." />
    </div>
  );
}
