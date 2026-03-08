import Axios from "axios";

import { getApiErrorMessage, normalizeApiError } from "@/lib/api/api-error";
import { envClient } from "@/lib/config/env.client";
import { getAccessTokenFromStorage } from "@/features/auth/utils/auth-storage";

export const axiosInstance = Axios.create({
  baseURL: envClient.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessTokenFromStorage();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(normalizeApiError(error)),
);

export { getApiErrorMessage };
