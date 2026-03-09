import { Button } from "@/components/ui/button";

type ApplicationsPaginationProps = {
  page: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
};

function getVisiblePages(page: number, totalPages: number) {
  const start = Math.max(1, page - 1);
  const end = Math.min(totalPages, start + 2);
  const pages = [];

  for (let current = start; current <= end; current += 1) {
    pages.push(current);
  }

  if (!pages.includes(page)) {
    pages.unshift(page);
  }

  return Array.from(new Set(pages)).sort((a, b) => a - b);
}

export function ApplicationsPagination({
  page,
  totalPages,
  total,
  limit,
  onPageChange,
}: ApplicationsPaginationProps) {
  const startItem = total === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);
  const visiblePages = getVisiblePages(page, totalPages);

  return (
    <footer className="flex flex-col gap-3 border-t border-[#E2E8F0] px-6 py-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-[#64748B]">
        Showing {startItem} to {endItem} of {total} applications
      </p>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 rounded-lg border-[#E2E8F0] bg-white px-3 text-sm"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>

        {visiblePages.map((visiblePage) => (
          <Button
            key={visiblePage}
            type="button"
            variant="outline"
            size="sm"
            className={`h-8 min-w-8 rounded-lg px-3 text-sm ${
              visiblePage === page
                ? "border-[#CBD5E1] bg-[#F8FAFC] text-[#0F172A]"
                : "border-[#E2E8F0] bg-white"
            }`}
            onClick={() => onPageChange(visiblePage)}
          >
            {visiblePage}
          </Button>
        ))}

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-8 rounded-lg border-[#E2E8F0] bg-white px-3 text-sm"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </footer>
  );
}
