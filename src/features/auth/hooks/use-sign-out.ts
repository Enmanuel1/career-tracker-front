"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useAuthStore } from "@/features/auth/store/auth.store";
import { ROUTES } from "@/lib/config/routes";

export function useSignOut() {
  const router = useRouter();
  const clearSession = useAuthStore((state) => state.clearSession);

  return () => {
    clearSession();
    toast.success("Signed out");
    router.replace(ROUTES.LOGIN);
  };
}
