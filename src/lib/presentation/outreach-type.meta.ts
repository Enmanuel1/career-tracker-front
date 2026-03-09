import { type OutreachType, formatDomainLabel, type PresentationMeta } from "@/lib/presentation/types";

export const outreachTypeMeta: Record<OutreachType, PresentationMeta> = {
  CONNECT: { label: "Connect", badgeVariant: "secondary" },
  FOLLOW_UP: { label: "Follow Up", badgeVariant: "default" },
  THANK_YOU: { label: "Thank You", badgeVariant: "outline" },
};

export function getOutreachTypeMeta(type: string): PresentationMeta {
  return outreachTypeMeta[type as OutreachType] ?? { label: formatDomainLabel(type), badgeVariant: "outline" };
}
