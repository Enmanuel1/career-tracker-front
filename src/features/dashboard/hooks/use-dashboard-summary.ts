import { useQuery } from "@tanstack/react-query";

import { getDashboardSummary } from "@/features/dashboard/api/dashboard.api";
import { queryKeys } from "@/lib/api/query-keys";

export function useDashboardSummary() {
  return useQuery({
    queryKey: queryKeys.dashboard.summary,
    queryFn: getDashboardSummary,
  });
}
