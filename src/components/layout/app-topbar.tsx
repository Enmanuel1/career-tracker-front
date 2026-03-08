"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { AiSearchIcon, BellDotIcon, User03Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthSession } from "@/hooks/use-auth-session";

type AppTopbarProps = {
  title?: string;
};

function getUserInitials(fullName?: string, email?: string) {
  if (fullName && fullName.trim().length > 0) {
    return fullName
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  return email?.slice(0, 2).toUpperCase() ?? "U";
}

export function AppTopbar({ title = "Career Tracker" }: AppTopbarProps) {
  const { session } = useAuthSession();
  const initials = getUserInitials(session?.user.fullName, session?.user.email);

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-base font-semibold text-[#0F172A]">{title}</h1>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex h-10 w-full max-w-md items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 text-sm text-[#64748B]">
            <HugeiconsIcon icon={AiSearchIcon} strokeWidth={1.8} className="size-4" />
            <span>Search applications, contacts, reminders...</span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            className="border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
            aria-label="Notifications"
          >
            <HugeiconsIcon icon={BellDotIcon} strokeWidth={1.8} className="size-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-full border border-[#C7D2FE] bg-[#EEF2FF] text-xs font-semibold text-[#3730A3]"
                aria-label="Open user menu"
              >
                {initials}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>
                <p className="font-medium text-[#0F172A]">{session?.user.fullName || "Your account"}</p>
                <p className="mt-0.5 text-[11px] text-[#64748B]">{session?.user.email || "user@example.com"}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={User03Icon} strokeWidth={1.8} className="size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
