import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SearchPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function SearchPagination({
  currentPage,
  totalPages,
  onPageChange,
}: SearchPaginationProps) {
  const pages: (number | '...')[] = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (currentPage > 3) pages.push('...')
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (currentPage < totalPages - 2) pages.push('...')
    pages.push(totalPages)
  }

  return (
    <div className="flex justify-center">
      <nav className="inline-flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-300 text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        {pages.map((page, i) =>
          page === '...' ? (
            <span key={`dots-${i}`} className="w-9 h-9 flex items-center justify-center text-sm text-neutral-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                page === currentPage
                  ? 'bg-primary-600 text-white'
                  : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-300 text-neutral-600 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </nav>
    </div>
  )
}
