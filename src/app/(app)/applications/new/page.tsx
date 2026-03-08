import { PageHeader } from "@/components/shared/page-header";
import { CreateApplicationForm } from "@/features/applications/components/create-application-form";

export default function NewApplicationPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="New Application" description="Create a new job application entry." />
      <CreateApplicationForm />
    </div>
  );
}
