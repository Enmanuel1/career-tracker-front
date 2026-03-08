export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  APPLICATIONS: "/applications",
  NEW_APPLICATION: "/applications/new",
  RESUMES: "/resumes",
  CONTACTS: "/contacts",
  REMINDERS: "/reminders",
  PREP: "/prep",
  TEMPLATES: "/templates",
  SETTINGS: "/settings",
  STAR_STORIES: "/star-stories",
} as const;

export type NavMatchStrategy = "exact" | "prefix";
export type AppNavIconKey =
  | "dashboard"
  | "applications"
  | "resumes"
  | "contacts"
  | "reminders"
  | "prep"
  | "templates"
  | "settings";

export type AppNavItem = {
  label: string;
  href: string;
  icon: AppNavIconKey;
  match?: NavMatchStrategy;
};

export const APP_NAV_ITEMS: AppNavItem[] = [
  { label: "Dashboard", href: ROUTES.DASHBOARD, icon: "dashboard", match: "prefix" },
  { label: "Applications", href: ROUTES.APPLICATIONS, icon: "applications", match: "prefix" },
  { label: "Resumes", href: ROUTES.RESUMES, icon: "resumes", match: "prefix" },
  { label: "Contacts", href: ROUTES.CONTACTS, icon: "contacts", match: "prefix" },
  { label: "Reminders", href: ROUTES.REMINDERS, icon: "reminders", match: "prefix" },
  { label: "Interview Prep", href: ROUTES.PREP, icon: "prep", match: "prefix" },
  { label: "Templates", href: ROUTES.TEMPLATES, icon: "templates", match: "prefix" },
];

export const APP_SETTINGS_ITEM: AppNavItem = {
  label: "Settings",
  href: ROUTES.SETTINGS,
  icon: "settings",
  match: "prefix",
};
