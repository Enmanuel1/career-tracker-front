"use client";

import { useState } from "react";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

import { CreateApplicationModal } from "@/features/applications/components/create-application-modal";

export function CreateApplicationTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="h-12 cursor-pointer rounded-xl bg-[#4F46E5] px-5 text-sm font-semibold text-white hover:bg-[#4338CA]"
      >
        <HugeiconsIcon icon={Add01Icon} strokeWidth={2} className="size-4" />
        New Application
      </Button>

      <CreateApplicationModal open={open} onOpenChange={setOpen} />
    </>
  );
}
