"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateApplication } from "@/features/applications/hooks/use-create-application";
import {
  applicationSchema,
  type ApplicationSchema,
} from "@/features/applications/schemas/application.schema";
import {
  APPLICATION_STATUSES,
  APPLICATION_WORK_MODES,
  type CreateApplicationPayload,
} from "@/features/applications/types/application.types";
import { getApiErrorMessage } from "@/lib/api/axios";
import { getApplicationStatusMeta, getWorkModeMeta } from "@/lib/presentation";

import { CreateApplicationReview } from "@/features/applications/components/create-application-review";
import { CreateApplicationStepper } from "@/features/applications/components/create-application-stepper";

type CreateApplicationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const STEPS = [
  {
    title: "Company",
    description: "Set company details",
    fields: ["companyName", "companyWebsite", "industry"] as const,
  },
  {
    title: "Role",
    description: "Add role information",
    fields: ["jobTitle", "level", "department", "workMode", "locationLabel"] as const,
  },
  {
    title: "Details",
    description: "Track application metadata",
    fields: ["source", "jobUrl", "status", "appliedAt", "deadlineAt", "resumeUsedId"] as const,
  },
  {
    title: "Review",
    description: "Confirm before saving",
    fields: [] as const,
  },
] as const;

function toOptionalString(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function toOptionalIsoDate(value: string) {
  if (!value.trim()) {
    return undefined;
  }

  return new Date(`${value}T00:00:00`).toISOString();
}

export function CreateApplicationModal({ open, onOpenChange }: CreateApplicationModalProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const createApplicationMutation = useCreateApplication();

  const form = useForm<ApplicationSchema>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      companyName: "",
      companyWebsite: "",
      industry: "",
      jobTitle: "",
      level: "",
      department: "",
      workMode: "REMOTE",
      locationLabel: "",
      source: "",
      jobUrl: "",
      status: "APPLIED",
      appliedAt: "",
      deadlineAt: "",
      resumeUsedId: "",
    },
  });

  const isLastStep = stepIndex === STEPS.length - 1;

  const reviewValues = form.watch();

  const currentMeta = useMemo(() => STEPS[stepIndex], [stepIndex]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      form.reset();
      setStepIndex(0);
    }

    onOpenChange(nextOpen);
  };

  const handleNext = async () => {
    const fields = STEPS[stepIndex].fields;

    if (fields.length === 0) {
      setStepIndex((current) => Math.min(current + 1, STEPS.length - 1));
      return;
    }

    const isValid = await form.trigger(fields, { shouldFocus: true });

    if (isValid) {
      setStepIndex((current) => Math.min(current + 1, STEPS.length - 1));
    }
  };

  const handleBack = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = async (values: ApplicationSchema) => {
    const payload: CreateApplicationPayload = {
      companyName: values.companyName.trim(),
      companyWebsite: toOptionalString(values.companyWebsite),
      industry: toOptionalString(values.industry),
      jobTitle: values.jobTitle.trim(),
      level: toOptionalString(values.level),
      department: toOptionalString(values.department),
      workMode: values.workMode,
      locationLabel: toOptionalString(values.locationLabel),
      source: toOptionalString(values.source),
      jobUrl: toOptionalString(values.jobUrl),
      status: values.status,
      appliedAt: toOptionalIsoDate(values.appliedAt),
      deadlineAt: toOptionalIsoDate(values.deadlineAt),
      resumeUsedId: toOptionalString(values.resumeUsedId),
    };

    try {
      await createApplicationMutation.mutateAsync(payload);
      toast.success("Application created successfully");
      handleOpenChange(false);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to create application"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-2xl border border-[#E2E8F0] bg-white p-0" showCloseButton={false}>
        <DialogHeader className="space-y-2 border-b border-[#E2E8F0] px-6 pt-6 pb-4">
          <DialogTitle className="text-xl font-semibold text-[#0F172A]">New Application</DialogTitle>
          <DialogDescription className="text-sm text-[#64748B]">
            Add a new job application in a few quick steps.
          </DialogDescription>
          <CreateApplicationStepper currentStep={stepIndex} steps={STEPS} />
          <div>
            <p className="text-sm font-semibold text-[#0F172A]">{currentMeta.title}</p>
            <p className="text-xs text-[#64748B]">{currentMeta.description}</p>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-5 px-6 py-5" onSubmit={form.handleSubmit(handleSubmit)}>
            {stepIndex === 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input placeholder="Software, finance, healthcare..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}

            {stepIndex === 1 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job title</FormLabel>
                      <FormControl>
                        <Input placeholder="Frontend Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Level</FormLabel>
                      <FormControl>
                        <Input placeholder="Junior, Mid, Senior" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input placeholder="Engineering, Product..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="workMode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work mode</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select work mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {APPLICATION_WORK_MODES.map((mode) => (
                            <SelectItem key={mode} value={mode}>
                              {getWorkModeMeta(mode).label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="locationLabel"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Santo Domingo / Remote" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}

            {stepIndex === 2 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="source"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Source</FormLabel>
                      <FormControl>
                        <Input placeholder="LinkedIn, referral..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {APPLICATION_STATUSES.map((status) => (
                            <SelectItem key={status} value={status}>
                              {getApplicationStatusMeta(status).label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobUrl"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Job URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://company.com/jobs/frontend" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="appliedAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applied date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deadlineAt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resumeUsedId"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Resume used</FormLabel>
                      <Select
                        value={field.value || "none"}
                        onValueChange={(value) => field.onChange(value === "none" ? "" : value)}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a resume" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">No resume attached</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}

            {stepIndex === 3 ? <CreateApplicationReview values={reviewValues} /> : null}

            <DialogFooter className="border-t border-[#E2E8F0] pt-5 sm:justify-between">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleOpenChange(false)}
                  className="cursor-pointer"
                >
                  Cancel
                </Button>
                {stepIndex > 0 ? (
                  <Button type="button" variant="outline" onClick={handleBack} className="cursor-pointer">
                    Back
                  </Button>
                ) : null}
              </div>

              {isLastStep ? (
                <Button
                  type="submit"
                  className="cursor-pointer bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                  disabled={createApplicationMutation.isPending}
                >
                  {createApplicationMutation.isPending ? "Saving..." : "Save Application"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer bg-[#4F46E5] text-white hover:bg-[#4338CA]"
                >
                  Next
                </Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
