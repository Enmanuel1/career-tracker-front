"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { login } from "@/features/auth/api/auth.api";
import type { LoginPayload } from "@/features/auth/types/auth.types";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { getApiErrorMessage } from "@/lib/api/axios";
import { ROUTES } from "@/lib/config/routes";

export function useLogin() {
  const router = useRouter();
  const setSession = useAuthStore((state) => state.setSession);

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (session) => {
      setSession(session);
      toast.success("Welcome back");
      router.replace(ROUTES.DASHBOARD);
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "Unable to login"));
    },
  });
}
