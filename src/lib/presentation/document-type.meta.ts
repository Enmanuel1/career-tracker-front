import { File02Icon, FileEditIcon } from "@hugeicons/core-free-icons";

import { type DocumentType, formatDomainLabel, type PresentationMeta } from "@/lib/presentation/types";

export const documentTypeMeta: Record<DocumentType, PresentationMeta> = {
  RESUME: { label: "Resume", icon: File02Icon },
  COVER_LETTER: { label: "Cover Letter", icon: FileEditIcon },
  JOB_DESCRIPTION: { label: "Job Description", shortLabel: "JD", icon: File02Icon },
  OTHER: { label: "Other", icon: File02Icon },
};

export function getDocumentTypeMeta(type: string): PresentationMeta {
  return documentTypeMeta[type as DocumentType] ?? { label: formatDomainLabel(type), icon: File02Icon };
}
