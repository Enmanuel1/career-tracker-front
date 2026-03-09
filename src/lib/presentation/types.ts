import type { HugeiconsProps } from "@hugeicons/react";

export type BadgeVariantTone = "default" | "secondary" | "destructive" | "outline" | "ghost";

export type PresentationMeta = {
  label: string;
  shortLabel?: string;
  icon?: HugeiconsProps["icon"];
  badgeVariant?: BadgeVariantTone;
  className?: string;
  iconWrapperClassName?: string;
  description?: string;
};

export type ApplicationStatus =
  | "DRAFT"
  | "APPLIED"
  | "IN_PROGRESS"
  | "INTERVIEWING"
  | "OFFER"
  | "REJECTED"
  | "GHOSTED"
  | "CLOSED";

export type EventType =
  | "APPLIED"
  | "EMAIL_RECEIVED"
  | "FOLLOW_UP_SENT"
  | "PHONE_SCREEN"
  | "TECH_INTERVIEW"
  | "ONSITE"
  | "OFFER_RECEIVED"
  | "REJECTED"
  | "NOTE"
  | "SYSTEM_ALERT";

export type ReminderType = "FOLLOW_UP" | "CHECK_IN" | "INTERVIEW_PREP" | "CUSTOM";

export type ContactRole = "RECRUITER" | "HIRING_MANAGER" | "EMPLOYEE_REFERRAL" | "OTHER";

export type WorkMode = "REMOTE" | "HYBRID" | "ONSITE";

export type DocumentType = "RESUME" | "COVER_LETTER" | "JOB_DESCRIPTION" | "OTHER";

export type OutreachType = "CONNECT" | "FOLLOW_UP" | "THANK_YOU";

export function formatDomainLabel(value: string): string {
  return value
    .toLowerCase()
    .split("_")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}
