export const queryKeys = {
  auth: {
    session: ["auth", "session"] as const,
  },
  dashboard: {
    summary: ["dashboard", "summary"] as const,
  },
  applications: {
    list: ["applications", "list"] as const,
  },
} as const;
