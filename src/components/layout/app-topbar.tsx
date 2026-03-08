"use client";

import { Button } from "@/components/ui/button";
import { useAuthSession } from "@/hooks/use-auth-session";
import { envClient } from "@/lib/config/env.client";

export function AppTopbar() {
  const { session } = useAuthSession();

  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <p className="text-sm font-semibold">{envClient.NEXT_PUBLIC_APP_NAME}</p>
      <Button variant="outline" size="sm" className="pointer-events-none">
        {session?.user.fullName || session?.user.email || "User"}
      </Button>
    </header>
  );
}
