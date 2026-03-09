import { type ReminderType, formatDomainLabel, type PresentationMeta } from "@/lib/presentation/types";

export const reminderTypeMeta: Record<ReminderType, PresentationMeta> = {
  FOLLOW_UP: { label: "Follow Up", badgeVariant: "default" },
  CHECK_IN: { label: "Check In", badgeVariant: "secondary" },
  INTERVIEW_PREP: { label: "Interview Prep", badgeVariant: "outline" },
  CUSTOM: { label: "Custom", badgeVariant: "ghost" },
};

export function getReminderTypeMeta(type: string): PresentationMeta {
  return reminderTypeMeta[type as ReminderType] ?? { label: formatDomainLabel(type), badgeVariant: "outline" };
}
