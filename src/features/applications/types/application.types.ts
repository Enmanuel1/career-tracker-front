export const APPLICATION_WORK_MODES = ["REMOTE", "HYBRID", "ONSITE"] as const;
export const APPLICATION_STATUSES = [
  "DRAFT",
  "APPLIED",
  "IN_PROGRESS",
  "INTERVIEWING",
  "OFFER",
  "REJECTED",
  "GHOSTED",
  "CLOSED",
] as const;

export type ApplicationWorkMode = (typeof APPLICATION_WORK_MODES)[number];
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

export type Application = {
  id: string;
  userId: string;
  companyName: string;
  jobTitle: string;
  workMode: ApplicationWorkMode;
  status: ApplicationStatus;
  source: string | null;
  locationLabel: string | null;
  jobUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PaginatedApplicationsResponse = {
  items: Application[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type ListApplicationsQuery = {
  page?: number;
  limit?: number;
  status?: ApplicationStatus;
  workMode?: ApplicationWorkMode;
  source?: string;
  search?: string;
};

export type CreateApplicationPayload = {
  companyName: string;
  jobTitle: string;
  workMode: ApplicationWorkMode;
  status: ApplicationStatus;
  source?: string;
  locationLabel?: string;
  jobUrl?: string;
};
