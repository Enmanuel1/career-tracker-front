"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { LoadingState } from "@/components/shared/loading-state";
import { PageHeader } from "@/components/shared/page-header";
import { SummaryCard } from "@/features/dashboard/components/summary-card";
import { useDashboardSummary } from "@/features/dashboard/hooks/use-dashboard-summary";
import { getApiErrorMessage } from "@/lib/api/axios";

export default function DashboardPage() {
  const summaryQuery = useDashboardSummary();

  if (summaryQuery.isLoading) {
    return (
      <div className="space-y-6">
        <PageHeader title="Dashboard" description="Overview of your job search pipeline." />
        <LoadingState />
      </div>
    );
  }

  if (summaryQuery.isError) {
    return (
      <div className="space-y-6">
        <PageHeader title="Dashboard" description="Overview of your job search pipeline." />
        <EmptyState
          title="Could not load dashboard"
          description={getApiErrorMessage(summaryQuery.error)}
        />
      </div>
    );
  }

  if (!summaryQuery.data) {
    return (
      <div className="space-y-6">
        <PageHeader title="Dashboard" description="Overview of your job search pipeline." />
        <EmptyState title="No data" description="Dashboard data is unavailable right now." />
      </div>
    );
  }

  const { data } = summaryQuery;

  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" description="Overview of your job search pipeline." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <SummaryCard title="Total Applications" value={data.totalApplications} />
        <SummaryCard title="Active Applications" value={data.activeApplications} />
        <SummaryCard title="Interviewing" value={data.interviewing} />
        <SummaryCard title="Offers" value={data.offers} />
        <SummaryCard title="Rejections" value={data.rejections} />
        <SummaryCard title="Reminders Due" value={data.remindersDue} />
      </div>
    </div>
  );
}
