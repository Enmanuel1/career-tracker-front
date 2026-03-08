import type { AuthSession } from "@/features/auth/types/auth.types";

export const AUTH_STORAGE_KEY = "career-tracker:auth";

type PersistedAuthState = {
  state?: {
    session?: AuthSession | null;
  };
};

export function getAuthSession(): AuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as PersistedAuthState | AuthSession;

    if ("state" in parsed) {
      return parsed.state?.session ?? null;
    }

    if ("accessToken" in parsed && "user" in parsed) {
      return parsed as AuthSession;
    }

    return null;
  } catch {
    return null;
  }
}

export function getAccessTokenFromStorage(): string | null {
  return getAuthSession()?.accessToken ?? null;
}
