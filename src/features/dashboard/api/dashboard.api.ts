import { axiosInstance } from "@/lib/api/axios";
import type { DashboardSummary } from "@/features/dashboard/types/dashboard.types";

export async function getDashboardSummary(): Promise<DashboardSummary> {
  const { data } = await axiosInstance.get<DashboardSummary>("/dashboard/summary");
  return data;
}
