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
import { useSignOut } from "@/features/auth/hooks/use-sign-out";
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

export function AppTopbar({ title = "Dashboard" }: AppTopbarProps) {
  const { session } = useAuthSession();
  const signOut = useSignOut();
  const initials = getUserInitials(session?.user.fullName, session?.user.email);

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">{title}</h1>

        <div className="flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="icon-sm"
            className="cursor-pointer text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
            aria-label="Search"
          >
            <HugeiconsIcon icon={AiSearchIcon} strokeWidth={1.9} className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            className="cursor-pointer text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
            aria-label="Notifications"
          >
            <HugeiconsIcon icon={BellDotIcon} strokeWidth={1.9} className="size-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hidden cursor-pointer items-center gap-3 border-l border-[#E2E8F0] pl-4 md:flex"
                aria-label="User menu"
              >
                <div className="text-right leading-tight">
                  <p className="text-sm font-semibold text-[#0F172A]">{session?.user.fullName || "Account"}</p>
                  <p className="text-xs text-[#64748B]">Free Account</p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#6366F1] bg-[#EEF2FF] text-xs font-semibold text-[#3730A3]">
                  {initials}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>
                <p className="font-medium text-[#0F172A]">{session?.user.fullName || "Your account"}</p>
                <p className="mt-0.5 text-[11px] text-[#64748B]">{session?.user.email || "user@example.com"}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <HugeiconsIcon icon={User03Icon} strokeWidth={1.8} className="size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" className="cursor-pointer" onClick={signOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border-2 border-[#6366F1] bg-[#EEF2FF] text-xs font-semibold text-[#3730A3] md:hidden"
                aria-label="User menu"
              >
                {initials}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" className="cursor-pointer" onClick={signOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
