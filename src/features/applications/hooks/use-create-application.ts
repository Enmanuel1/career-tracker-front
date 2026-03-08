import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createApplication } from "@/features/applications/api/applications.api";
import { queryKeys } from "@/lib/api/query-keys";

export function useCreateApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.applications.list });
    },
  });
}
