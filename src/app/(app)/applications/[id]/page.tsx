import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

type ApplicationDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApplicationDetailPage({ params }: ApplicationDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <PageHeader title="Application Detail" description={`Application ID: ${id}`} />
      <EmptyState
        title="Detail view scaffolded"
        description="This page is ready for timeline, notes, and interview status modules."
      />
    </div>
  );
}
