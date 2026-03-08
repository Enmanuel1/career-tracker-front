import { axiosInstance } from "@/lib/api/axios";
import type { LoginPayload, LoginResponse } from "@/features/auth/types/auth.types";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await axiosInstance.post<LoginResponse>("/auth/login", payload);
  return data;
}
