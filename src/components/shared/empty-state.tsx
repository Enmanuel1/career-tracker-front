import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { DashboardSquare01Icon } from "@hugeicons/core-free-icons";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <section className="rounded-xl border border-dashed border-[#CBD5E1] bg-white p-8 text-center">
      <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#F8FAFC] text-[#64748B] ring-1 ring-[#E2E8F0]">
        <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={1.7} className="size-5" />
      </div>
      <h3 className="text-base font-semibold text-[#0F172A]">{title}</h3>
      {description ? <p className="mx-auto mt-2 max-w-md text-sm text-[#475569]">{description}</p> : null}
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </section>
  );
}
