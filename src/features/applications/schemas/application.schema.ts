import { z } from "zod";

import { APPLICATION_STATUSES, APPLICATION_WORK_MODES } from "@/features/applications/types/application.types";

export const applicationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  workMode: z.enum(APPLICATION_WORK_MODES),
  status: z.enum(APPLICATION_STATUSES),
  source: z.string().trim(),
  locationLabel: z.string().trim(),
  jobUrl: z.string().trim().refine(
    (value) => !value || z.url().safeParse(value).success,
    "Enter a valid URL",
  ),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
