import { z } from "zod";

import { APPLICATION_STATUSES, APPLICATION_WORK_MODES } from "@/features/applications/types/application.types";

const optionalUrlField = z.union([z.literal(""), z.string().trim().url("Enter a valid URL")]);
const optionalDateField = z.union([
  z.literal(""),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Select a valid date"),
]);

export const applicationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),
  companyWebsite: optionalUrlField,
  industry: z.string().trim(),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  level: z.string().trim(),
  department: z.string().trim(),
  workMode: z.enum(APPLICATION_WORK_MODES),
  locationLabel: z.string().trim(),
  source: z.string().trim(),
  jobUrl: optionalUrlField,
  status: z.enum(APPLICATION_STATUSES),
  appliedAt: optionalDateField,
  deadlineAt: optionalDateField,
  resumeUsedId: z.string().trim(),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
