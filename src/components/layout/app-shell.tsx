"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-topbar";
import { APP_NAV_ITEMS, APP_SETTINGS_ITEM } from "@/lib/config/routes";

type AppShellProps = {
  children: ReactNode;
};

function getPageTitle(pathname: string) {
  const allItems = [...APP_NAV_ITEMS, APP_SETTINGS_ITEM];
  const matchedItem = allItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  return matchedItem?.label ?? "Career Tracker";
}

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-[#0F172A]">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar title={pageTitle} />
        <main className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
