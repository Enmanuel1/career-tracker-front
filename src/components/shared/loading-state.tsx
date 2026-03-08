import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  className?: string;
};

export function LoadingState({ className }: LoadingStateProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-5">
        <Skeleton className="mb-3 h-6 w-48 rounded-md bg-[#F1F5F9]" />
        <Skeleton className="h-4 w-80 max-w-full rounded-md bg-[#F1F5F9]" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
            <Skeleton className="mb-3 h-4 w-24 rounded-md bg-[#F1F5F9]" />
            <Skeleton className="h-8 w-20 rounded-md bg-[#F1F5F9]" />
          </div>
        ))}
      </div>
    </section>
  );
}
