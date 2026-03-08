import { Skeleton } from "@/components/ui/skeleton";

export function LoadingState({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  );
}
