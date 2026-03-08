import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Contacts" description="Track recruiters, hiring managers, and referrals." />
      <EmptyState title="Contacts module scaffold" description="Ready for CRM-like contact management." />
    </div>
  );
}
