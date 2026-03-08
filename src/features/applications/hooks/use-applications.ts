import { useQuery } from "@tanstack/react-query";

import { getApplications } from "@/features/applications/api/applications.api";
import type { ListApplicationsQuery } from "@/features/applications/types/application.types";
import { queryKeys } from "@/lib/api/query-keys";

export function useApplications(query: ListApplicationsQuery = { page: 1, limit: 20 }) {
  return useQuery({
    queryKey: [...queryKeys.applications.list, query],
    queryFn: () => getApplications(query),
  });
}
