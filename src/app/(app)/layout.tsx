"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { LoadingState } from "@/components/shared/loading-state";
import { useAuthSession } from "@/hooks/use-auth-session";
import { getAuthRedirectPath } from "@/middleware/auth-redirect";

export default function ProtectedAppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { session, isAuthenticated, isLoading } = useAuthSession();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const redirectPath = getAuthRedirectPath(session);

    if (redirectPath) {
      router.replace(redirectPath);
    }
  }, [isLoading, router, session]);

  if (isLoading) {
    return (
      <div className="p-6">
        <LoadingState />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <AppShell>{children}</AppShell>;
}
