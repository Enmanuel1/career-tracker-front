"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "@/lib/config/routes";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: ROUTES.DASHBOARD, label: "Dashboard" },
  { href: ROUTES.APPLICATIONS, label: "Applications" },
  { href: ROUTES.RESUMES, label: "Resumes" },
  { href: ROUTES.CONTACTS, label: "Contacts" },
  { href: ROUTES.REMINDERS, label: "Reminders" },
  { href: ROUTES.PREP, label: "Prep" },
  { href: ROUTES.STAR_STORIES, label: "STAR Stories" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-r bg-card/50 md:w-64">
      <nav className="flex flex-row gap-1 overflow-x-auto p-3 md:flex-col md:overflow-visible">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
