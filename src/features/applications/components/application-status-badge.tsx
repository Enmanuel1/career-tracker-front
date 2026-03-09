import { getApplicationStatusMeta } from "@/lib/presentation";

import type { ApplicationStatus } from "@/features/applications/types/application.types";

type ApplicationStatusBadgeProps = {
  status: ApplicationStatus;
};

const toneClassName: Record<ApplicationStatus, string> = {
  DRAFT: "bg-[#F1F5F9] text-[#475569]",
  APPLIED: "bg-[#EFF6FF] text-[#334155]",
  IN_PROGRESS: "bg-[#EEF2FF] text-[#3730A3]",
  INTERVIEWING: "bg-[#EEF2FF] text-[#2563EB]",
  OFFER: "bg-[#ECFDF5] text-[#059669]",
  REJECTED: "bg-[#FEF2F2] text-[#B91C1C]",
  GHOSTED: "bg-[#F8FAFC] text-[#64748B]",
  CLOSED: "bg-[#F8FAFC] text-[#64748B]",
};

const dotClassName: Record<ApplicationStatus, string> = {
  DRAFT: "bg-[#94A3B8]",
  APPLIED: "bg-[#94A3B8]",
  IN_PROGRESS: "bg-[#6366F1]",
  INTERVIEWING: "bg-[#3B82F6]",
  OFFER: "bg-[#10B981]",
  REJECTED: "bg-[#EF4444]",
  GHOSTED: "bg-[#94A3B8]",
  CLOSED: "bg-[#94A3B8]",
};

export function ApplicationStatusBadge({ status }: ApplicationStatusBadgeProps) {
  const meta = getApplicationStatusMeta(status);

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${toneClassName[status]}`}
    >
      <span className={`size-1.5 rounded-full ${dotClassName[status]}`} />
      {meta.shortLabel || meta.label}
    </span>
  );
}
