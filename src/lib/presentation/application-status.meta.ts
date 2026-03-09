import {
  type ApplicationStatus,
  formatDomainLabel,
  type PresentationMeta,
} from "@/lib/presentation/types";

export const applicationStatusMeta: Record<ApplicationStatus, PresentationMeta> = {
  DRAFT: { label: "Draft", shortLabel: "Draft", badgeVariant: "outline" },
  APPLIED: { label: "Applied", shortLabel: "Applied", badgeVariant: "secondary" },
  IN_PROGRESS: { label: "In Progress", shortLabel: "In Progress", badgeVariant: "default" },
  INTERVIEWING: { label: "Interviewing", shortLabel: "Interview", badgeVariant: "default" },
  OFFER: { label: "Offer", shortLabel: "Offer", badgeVariant: "default" },
  REJECTED: { label: "Rejected", shortLabel: "Rejected", badgeVariant: "destructive" },
  GHOSTED: { label: "Ghosted", shortLabel: "Ghosted", badgeVariant: "outline" },
  CLOSED: { label: "Closed", shortLabel: "Closed", badgeVariant: "ghost" },
};

export function getApplicationStatusMeta(status: string): PresentationMeta {
  return (
    applicationStatusMeta[status as ApplicationStatus] ?? {
      label: formatDomainLabel(status),
      shortLabel: formatDomainLabel(status),
      badgeVariant: "outline",
    }
  );
}
