import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiSearchIcon } from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";

type ApplicationsToolbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  newApplicationAction?: ReactNode;
};

export function ApplicationsToolbar({
  searchValue,
  onSearchChange,
  newApplicationAction,
}: ApplicationsToolbarProps) {
  return (
    <section className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-xl">
        <HugeiconsIcon
          icon={AiSearchIcon}
          strokeWidth={1.8}
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#94A3B8]"
        />
        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by company, role, or keywords..."
          className="h-12 rounded-xl border-[#E2E8F0] bg-white pl-9 text-sm text-[#0F172A] placeholder:text-[#94A3B8]"
        />
      </div>

      {newApplicationAction ? newApplicationAction : null}
    </section>
  );
}
