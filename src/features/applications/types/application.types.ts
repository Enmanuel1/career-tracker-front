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
  companyWebsite: string | null;
  industry: string | null;
  jobTitle: string;
  level: string | null;
  department: string | null;
  workMode: ApplicationWorkMode;
  status: ApplicationStatus;
  source: string | null;
  locationLabel: string | null;
  jobUrl: string | null;
  appliedAt: string | null;
  deadlineAt: string | null;
  resumeUsedId: string | null;
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
  companyWebsite?: string;
  industry?: string;
  jobTitle: string;
  level?: string;
  department?: string;
  workMode: ApplicationWorkMode;
  status: ApplicationStatus;
  source?: string;
  locationLabel?: string;
  jobUrl?: string;
  appliedAt?: string;
  deadlineAt?: string;
  resumeUsedId?: string;
};
