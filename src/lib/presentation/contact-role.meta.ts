import { type ContactRole, formatDomainLabel, type PresentationMeta } from "@/lib/presentation/types";

export const contactRoleMeta: Record<ContactRole, PresentationMeta> = {
  RECRUITER: { label: "Recruiter", badgeVariant: "default" },
  HIRING_MANAGER: { label: "Hiring Manager", badgeVariant: "secondary" },
  EMPLOYEE_REFERRAL: { label: "Employee Referral", shortLabel: "Referral", badgeVariant: "outline" },
  OTHER: { label: "Other", badgeVariant: "ghost" },
};

export function getContactRoleMeta(role: string): PresentationMeta {
  return contactRoleMeta[role as ContactRole] ?? { label: formatDomainLabel(role), badgeVariant: "outline" };
}
