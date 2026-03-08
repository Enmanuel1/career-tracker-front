import axios from "axios";

export type ApiError = {
  message: string;
  statusCode?: number;
  details?: unknown;
};

export function normalizeApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data as
      | { message?: string | string[]; error?: string; details?: unknown }
      | undefined;

    const message = Array.isArray(responseData?.message)
      ? responseData?.message[0]
      : responseData?.message || responseData?.error || error.message;

    return {
      message: message || "Request failed",
      statusCode: error.response?.status,
      details: responseData?.details,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Unexpected error" };
}

export function getApiErrorMessage(error: unknown, fallback = "Something went wrong") {
  const normalizedError = normalizeApiError(error);
  return normalizedError.message || fallback;
}
