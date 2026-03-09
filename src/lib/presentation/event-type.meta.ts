import {
  Alert01Icon,
  Briefcase01Icon,
  Calendar03Icon,
  File02Icon,
  Mail01Icon,
  NoteIcon,
} from "@hugeicons/core-free-icons";

import { type EventType, formatDomainLabel, type PresentationMeta } from "@/lib/presentation/types";

export const eventTypeMeta: Record<EventType, PresentationMeta> = {
  APPLIED: {
    label: "Applied",
    icon: Briefcase01Icon,
    iconWrapperClassName: "bg-[#ECFDF5] text-[#059669]",
    description: "Application submitted",
  },
  EMAIL_RECEIVED: {
    label: "Email Received",
    icon: Mail01Icon,
    iconWrapperClassName: "bg-[#FEF3C7] text-[#C2410C]",
    description: "New email update",
  },
  FOLLOW_UP_SENT: {
    label: "Follow-up Sent",
    icon: Mail01Icon,
    iconWrapperClassName: "bg-[#EEF2FF] text-[#3730A3]",
    description: "Follow-up sent",
  },
  PHONE_SCREEN: {
    label: "Phone Screen",
    icon: Calendar03Icon,
    iconWrapperClassName: "bg-[#E0EAFF] text-[#2563EB]",
    description: "Phone screen scheduled",
  },
  TECH_INTERVIEW: {
    label: "Tech Interview",
    icon: Calendar03Icon,
    iconWrapperClassName: "bg-[#E0EAFF] text-[#2563EB]",
    description: "Technical interview",
  },
  ONSITE: {
    label: "Onsite",
    icon: Calendar03Icon,
    iconWrapperClassName: "bg-[#E0EAFF] text-[#2563EB]",
    description: "Onsite interview",
  },
  OFFER_RECEIVED: {
    label: "Offer Received",
    icon: Briefcase01Icon,
    iconWrapperClassName: "bg-[#ECFDF5] text-[#059669]",
    description: "Offer update",
  },
  REJECTED: {
    label: "Rejected",
    icon: Alert01Icon,
    iconWrapperClassName: "bg-[#FEF2F2] text-[#B91C1C]",
    description: "Application rejected",
  },
  NOTE: {
    label: "Note",
    icon: NoteIcon,
    iconWrapperClassName: "bg-[#F3E8FF] text-[#7C3AED]",
    description: "Note added",
  },
  SYSTEM_ALERT: {
    label: "System Alert",
    icon: File02Icon,
    iconWrapperClassName: "bg-[#FEF2F2] text-[#B91C1C]",
    description: "System alert",
  },
};

export function getEventTypeMeta(type: string): PresentationMeta {
  return (
    eventTypeMeta[type as EventType] ?? {
      label: formatDomainLabel(type),
      icon: NoteIcon,
      iconWrapperClassName: "bg-[#F1F5F9] text-[#475569]",
      description: formatDomainLabel(type),
    }
  );
}
