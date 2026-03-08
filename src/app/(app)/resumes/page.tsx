import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function ResumesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Resumes" description="Manage resume versions and tailored documents." />
      <EmptyState title="Resume module scaffold" description="Ready for upload/versioning integration." />
    </div>
  );
}
