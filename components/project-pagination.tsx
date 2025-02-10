"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from "next/navigation"

interface ProjectsPaginationProps {
  totalPages: number
  currentPage: number
}

export default function ProjectsPagination({ totalPages, currentPage }: ProjectsPaginationProps) {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    router.push(`/projects?page=${page}`)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/projects?page=${currentPage - 1}`}
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 1) handlePageChange(currentPage - 1)
            }}
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem key={i + 1}>
            <PaginationLink
              href={`/projects?page=${i + 1}`}
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(i + 1)
              }}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`/projects?page=${currentPage + 1}`}
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages) handlePageChange(currentPage + 1)
            }}
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

