import { Badge } from "@/components/ui/badge";

import type { ApplicationStatus } from "@/features/applications/types/application.types";

const statusLabel: Record<ApplicationStatus, string> = {
  DRAFT: "Draft",
  APPLIED: "Applied",
  IN_PROGRESS: "In progress",
  INTERVIEWING: "Interviewing",
  OFFER: "Offer",
  REJECTED: "Rejected",
  GHOSTED: "Ghosted",
  CLOSED: "Closed",
};

const statusVariant: Record<ApplicationStatus, "outline" | "secondary" | "default" | "destructive"> = {
  DRAFT: "outline",
  APPLIED: "secondary",
  IN_PROGRESS: "secondary",
  INTERVIEWING: "default",
  OFFER: "default",
  REJECTED: "destructive",
  GHOSTED: "outline",
  CLOSED: "outline",
};

export function ApplicationStatusBadge({ status }: { status: ApplicationStatus }) {
  return <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>;
}
