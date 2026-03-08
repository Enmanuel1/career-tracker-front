function requireEnvValue(value: string | undefined, name: string): string {
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

const NEXT_PUBLIC_API_URL = requireEnvValue(
  process.env.NEXT_PUBLIC_API_URL,
  "NEXT_PUBLIC_API_URL",
);

const NEXT_PUBLIC_APP_NAME = requireEnvValue(
  process.env.NEXT_PUBLIC_APP_NAME,
  "NEXT_PUBLIC_APP_NAME",
);

export const envClient = {
  NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_NAME,
} as const;
