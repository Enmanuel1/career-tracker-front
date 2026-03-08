import { ROUTES } from "@/lib/config/routes";
import type { AuthSession } from "@/features/auth/types/auth.types";

export function getAuthRedirectPath(session: AuthSession | null): string | null {
  if (!session?.accessToken) {
    return ROUTES.LOGIN;
  }

  return null;
}
