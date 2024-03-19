import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems?: number;
};

export default function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }: PaginationProps) {
  const pageNumbers = Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
    if (totalPages <= 5) return i + 1;
    if (currentPage <= 3) return i + 1;
    if (currentPage + 2 >= totalPages) return totalPages - 5 + i + 1;
    return currentPage - 2 + i;
  });

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = totalItems ? Math.min(startItem + itemsPerPage - 1, totalItems) : null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        {totalItems && (
          <p className="my-5 sm:my-0 text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to <span className="font-medium">{endItem}</span> of <span className="font-medium">{totalItems}</span> results
          </p>
        )}
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className={clsx("relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", {
                "opacity-50 cursor-not-allowed": currentPage === 1,
              })}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span>Previous</span>
            </button>
            {pageNumbers.map(page => (
              <button
                key={page}
                disabled={currentPage === page}
                aria-current={page === currentPage ? "page" : undefined}
                className={clsx("relative inline-flex items-center px-4 py-2 border text-sm font-medium", {
                  "z-10 bg-indigo-50 border-indigo-500 text-indigo-600": currentPage === page,
                  "bg-white border-gray-300 text-gray-500 hover:bg-gray-50": currentPage !== page,
                })}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className={clsx("relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50", {
                "opacity-50 cursor-not-allowed": currentPage === totalPages,
              })}
            >
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
