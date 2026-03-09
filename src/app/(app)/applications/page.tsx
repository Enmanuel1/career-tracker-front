"use client";

import { useMemo, useState } from "react";

import { EmptyState } from "@/components/shared/empty-state";
import { LoadingState } from "@/components/shared/loading-state";
import { PageHeader } from "@/components/shared/page-header";
import { ApplicationsPagination } from "@/features/applications/components/applications-pagination";
import { ApplicationsTable } from "@/features/applications/components/applications-table";
import { ApplicationsToolbar } from "@/features/applications/components/applications-toolbar";
import { CreateApplicationTrigger } from "@/features/applications/components/create-application-trigger";
import { useApplications } from "@/features/applications/hooks/use-applications";
import { getApiErrorMessage } from "@/lib/api/axios";

const PAGE_SIZE = 10;

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const query = useMemo(
    () => ({
      page,
      limit: PAGE_SIZE,
      search: search.trim() || undefined,
    }),
    [page, search],
  );

  const applicationsQuery = useApplications(query);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Applications"
        description="Manage and track your active job hunt progress."
        actions={<CreateApplicationTrigger />}
      />

      <ApplicationsToolbar
        searchValue={search}
        onSearchChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
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
          title="No applications found"
          description="Create your first application or refine your search query."
        />
      ) : null}

      {applicationsQuery.data && applicationsQuery.data.items.length > 0 ? (
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
          <ApplicationsTable items={applicationsQuery.data.items} />
          <ApplicationsPagination
            page={applicationsQuery.data.page}
            totalPages={applicationsQuery.data.totalPages}
            total={applicationsQuery.data.total}
            limit={applicationsQuery.data.limit}
            onPageChange={setPage}
          />
        </div>
      ) : null}
    </div>
  );
}
