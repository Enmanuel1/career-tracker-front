"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { LoadingState } from "@/components/shared/loading-state";
import { getApiErrorMessage } from "@/lib/api/axios";
import { mockDashboardRecentActivity, mockDashboardUpcomingReminders } from "@/features/dashboard/api/dashboard.mock";
import { RecentActivityPanel } from "@/features/dashboard/components/recent-activity-panel";
import { SummaryCard } from "@/features/dashboard/components/summary-card";
import { UpcomingRemindersPanel } from "@/features/dashboard/components/upcoming-reminders-panel";
import { useDashboardSummary } from "@/features/dashboard/hooks/use-dashboard-summary";

export default function DashboardPage() {
  const summaryQuery = useDashboardSummary();

  if (summaryQuery.isLoading) {
    return (
      <div className="space-y-5">
        <LoadingState />
      </div>
    );
  }

  if (summaryQuery.isError || !summaryQuery.data) {
    return (
      <div className="space-y-5">
        <EmptyState
          title="Could not load dashboard summary"
          description={getApiErrorMessage(summaryQuery.error, "Try reloading in a moment.")}
        />
      </div>
    );
  }

  const summary = summaryQuery.data;

  return (
    <div className="space-y-5">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <SummaryCard
          title="Total Applications"
          value={summary.totalApplications}
          supportingText="Applications this month"
          statusPill="+10%"
          statusTone="success"
        />
        <SummaryCard
          title="Active Applications"
          value={summary.activeApplications}
          supportingText="In progress"
          statusPill="+2%"
          statusTone="info"
        />
        <SummaryCard
          title="Interviewing"
          value={summary.interviewing}
          supportingText="Scheduled calls"
          statusPill="+15%"
          statusTone="info"
        />
        <SummaryCard
          title="Offers"
          value={summary.offers}
          supportingText="Pending offers"
          statusPill="0%"
          statusTone="neutral"
        />
        <SummaryCard
          title="Rejections"
          value={summary.rejections}
          supportingText="Closed outcomes"
        />
        <SummaryCard
          title="Reminders Due"
          value={summary.remindersDue}
          supportingText="Tasks to follow up"
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentActivityPanel items={mockDashboardRecentActivity} />
        </div>

        <UpcomingRemindersPanel items={mockDashboardUpcomingReminders} />
      </section>
    </div>
  );
}
