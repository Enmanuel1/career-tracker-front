import { axiosInstance } from "@/lib/api/axios";
import type {
  CreateApplicationPayload,
  ListApplicationsQuery,
  PaginatedApplicationsResponse,
} from "@/features/applications/types/application.types";

export async function getApplications(
  query: ListApplicationsQuery = { page: 1, limit: 20 },
): Promise<PaginatedApplicationsResponse> {
  const { data } = await axiosInstance.get<PaginatedApplicationsResponse>("/applications", {
    params: query,
  });

  return data;
}

export async function createApplication(payload: CreateApplicationPayload) {
  const { data } = await axiosInstance.post("/applications", payload);
  return data;
}
