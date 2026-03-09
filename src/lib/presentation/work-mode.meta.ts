import { type PresentationMeta, type WorkMode, formatDomainLabel } from "@/lib/presentation/types";

export const workModeMeta: Record<WorkMode, PresentationMeta> = {
  REMOTE: { label: "Remote" },
  HYBRID: { label: "Hybrid" },
  ONSITE: { label: "Onsite" },
};

export function getWorkModeMeta(mode: string): PresentationMeta {
  return workModeMeta[mode as WorkMode] ?? { label: formatDomainLabel(mode) };
}
