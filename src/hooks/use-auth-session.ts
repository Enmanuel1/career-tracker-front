"use client";

import { useAuthStore } from "@/features/auth/store/auth.store";

export function useAuthSession() {
  const session = useAuthStore((state) => state.session);
  const hydrated = useAuthStore((state) => state.hydrated);

  return {
    session,
    isAuthenticated: Boolean(session?.accessToken),
    isLoading: !hydrated,
  };
}
