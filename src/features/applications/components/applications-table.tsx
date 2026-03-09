import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ApplicationStatusBadge } from "@/features/applications/components/application-status-badge";
import type { Application } from "@/features/applications/types/application.types";

type ApplicationsTableProps = {
  items: Application[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function ApplicationsTable({ items }: ApplicationsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F8FAFC]">
          <TableHead className="h-14 px-6 text-sm font-semibold text-[#0F172A]">Company</TableHead>
          <TableHead className="px-6 text-sm font-semibold text-[#0F172A]">Role</TableHead>
          <TableHead className="px-6 text-sm font-semibold text-[#0F172A]">Status</TableHead>
          <TableHead className="px-6 text-sm font-semibold text-[#0F172A]">Source</TableHead>
          <TableHead className="px-6 text-sm font-semibold text-[#0F172A]">Created Date</TableHead>
          <TableHead className="px-6 text-right text-sm font-semibold text-[#0F172A]">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map((application) => (
          <TableRow key={application.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC]">
            <TableCell className="px-6 py-4 text-base font-medium text-[#0F172A]">
              {application.companyName}
            </TableCell>
            <TableCell className="px-6 py-4 text-base text-[#334155]">{application.jobTitle}</TableCell>
            <TableCell className="px-6 py-4">
              <ApplicationStatusBadge status={application.status} />
            </TableCell>
            <TableCell className="px-6 py-4 text-base text-[#475569]">{application.source ?? "-"}</TableCell>
            <TableCell className="px-6 py-4 text-base text-[#475569]">
              {formatDate(application.createdAt)}
            </TableCell>
            <TableCell className="px-6 py-4 text-right">
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="cursor-pointer text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#64748B]"
                aria-label="Application actions"
              >
                <span className="text-lg leading-none">•••</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
