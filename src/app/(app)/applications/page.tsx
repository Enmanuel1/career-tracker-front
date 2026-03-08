"use client";

import Link from "next/link";

import { EmptyState } from "@/components/shared/empty-state";
import { LoadingState } from "@/components/shared/loading-state";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { ApplicationsTable } from "@/features/applications/components/applications-table";
import { useApplications } from "@/features/applications/hooks/use-applications";
import { getApiErrorMessage } from "@/lib/api/axios";
import { ROUTES } from "@/lib/config/routes";

export default function ApplicationsPage() {
  const applicationsQuery = useApplications();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Applications"
        description="Track applications across companies and roles."
        actions={
          <Button asChild>
            <Link href={ROUTES.NEW_APPLICATION}>New application</Link>
          </Button>
        }
      />

      {applicationsQuery.isLoading ? <LoadingState /> : null}

      {applicationsQuery.isError ? (
        <EmptyState
          title="Could not load applications"
          description={getApiErrorMessage(applicationsQuery.error)}
        />
      ) : null}

      {applicationsQuery.data && applicationsQuery.data.items.length === 0 ? (
        <EmptyState
          title="No applications yet"
          description="Create your first application to start tracking your pipeline."
          action={
            <Button asChild>
              <Link href={ROUTES.NEW_APPLICATION}>Create application</Link>
            </Button>
          }
        />
      ) : null}

      {applicationsQuery.data && applicationsQuery.data.items.length > 0 ? (
        <ApplicationsTable items={applicationsQuery.data.items} />
      ) : null}
    </div>
  );
}
