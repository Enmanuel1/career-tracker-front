import { getApplicationStatusMeta, getWorkModeMeta } from "@/lib/presentation";
import type { ApplicationSchema } from "@/features/applications/schemas/application.schema";

type CreateApplicationReviewProps = {
  values: ApplicationSchema;
};

function showValue(value: string) {
  return value.trim() ? value : "-";
}

export function CreateApplicationReview({ values }: CreateApplicationReviewProps) {
  const status = getApplicationStatusMeta(values.status).label;
  const workMode = getWorkModeMeta(values.workMode).label;

  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Company</p>
          <p className="mt-1 text-sm font-semibold text-[#0F172A]">{showValue(values.companyName)}</p>
          <p className="mt-0.5 text-sm text-[#475569]">{showValue(values.companyWebsite)}</p>
          <p className="mt-0.5 text-sm text-[#475569]">{showValue(values.industry)}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Role</p>
          <p className="mt-1 text-sm font-semibold text-[#0F172A]">{showValue(values.jobTitle)}</p>
          <p className="mt-0.5 text-sm text-[#475569]">{showValue(values.level)}</p>
          <p className="mt-0.5 text-sm text-[#475569]">{showValue(values.department)}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Application</p>
          <p className="mt-1 text-sm text-[#0F172A]">Status: {status}</p>
          <p className="mt-0.5 text-sm text-[#0F172A]">Work mode: {workMode}</p>
          <p className="mt-0.5 text-sm text-[#475569]">Source: {showValue(values.source)}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Dates</p>
          <p className="mt-1 text-sm text-[#0F172A]">Applied: {showValue(values.appliedAt)}</p>
          <p className="mt-0.5 text-sm text-[#0F172A]">Deadline: {showValue(values.deadlineAt)}</p>
          <p className="mt-0.5 text-sm text-[#475569]">Location: {showValue(values.locationLabel)}</p>
        </div>

        <div className="sm:col-span-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[#64748B]">Links</p>
          <p className="mt-1 break-all text-sm text-[#0F172A]">Job URL: {showValue(values.jobUrl)}</p>
          <p className="mt-0.5 break-all text-sm text-[#0F172A]">
            Resume ID: {showValue(values.resumeUsedId)}
          </p>
        </div>
      </div>
    </div>
  );
}
