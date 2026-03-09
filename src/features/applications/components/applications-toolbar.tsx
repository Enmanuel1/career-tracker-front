import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { AiSearchIcon, Add01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ApplicationsToolbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  newApplicationHref: string;
};

export function ApplicationsToolbar({
  searchValue,
  onSearchChange,
  newApplicationHref,
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

      <Button asChild className="h-12 rounded-xl bg-[#4F46E5] px-5 text-sm font-semibold text-white hover:bg-[#4338CA]">
        <Link href={newApplicationHref}>
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} className="size-4" />
          New Application
        </Link>
      </Button>
    </section>
  );
}
