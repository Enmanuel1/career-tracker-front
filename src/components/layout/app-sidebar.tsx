"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AccountSetting01Icon,
  Book02Icon,
  Briefcase01Icon,
  Calendar03Icon,
  Contact01Icon,
  DashboardSquare02Icon,
  File02Icon,
  FileManagementIcon,
} from "@hugeicons/core-free-icons";

import {
  APP_NAV_ITEMS,
  APP_SETTINGS_ITEM,
  type AppNavIconKey,
  type AppNavItem,
} from "@/lib/config/routes";
import { cn } from "@/lib/utils";

const iconByKey: Record<AppNavIconKey, React.ComponentProps<typeof HugeiconsIcon>["icon"]> = {
  dashboard: DashboardSquare02Icon,
  applications: Briefcase01Icon,
  resumes: File02Icon,
  contacts: Contact01Icon,
  reminders: Calendar03Icon,
  prep: Book02Icon,
  templates: FileManagementIcon,
  settings: AccountSetting01Icon,
};

function isActivePath(pathname: string, item: AppNavItem): boolean {
  if (item.match === "prefix") {
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  }

  return pathname === item.href;
}

function SidebarLink({ item, active }: { item: AppNavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors",
        active
          ? "bg-[#EEF2FF] text-[#3730A3] ring-1 ring-[#C7D2FE]"
          : "text-[#475569] hover:bg-white hover:text-[#0F172A]",
      )}
    >
      <HugeiconsIcon icon={iconByKey[item.icon]} strokeWidth={1.9} className="size-4 shrink-0" />
      <span>{item.label}</span>
    </Link>
  );
}

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-[#E2E8F0] bg-[#F1F5F9] md:flex">
      <div className="px-5 py-5">
        <div className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 ring-1 ring-[#E2E8F0]">
          <div className="flex size-8 items-center justify-center rounded-md bg-[#4F46E5] text-xs font-semibold text-white">
            CT
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0F172A]">Career Tracker</p>
            <p className="text-xs text-[#475569]">Productivity Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {APP_NAV_ITEMS.map((item) => (
          <SidebarLink key={item.href} item={item} active={isActivePath(pathname, item)} />
        ))}
      </nav>

      <div className="border-t border-[#E2E8F0] p-4">
        <SidebarLink item={APP_SETTINGS_ITEM} active={isActivePath(pathname, APP_SETTINGS_ITEM)} />
      </div>
    </aside>
  );
}
