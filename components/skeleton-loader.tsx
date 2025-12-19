import { Skeleton } from "@/components/ui/skeleton"

export function ProjectCardSkeleton() {
  return (
    <div className="group relative border border-[var(--deg-gray-light)] bg-[var(--deg-dark)] p-6">
      <Skeleton className="mb-4 h-48 w-full" />
      <Skeleton className="mb-2 h-4 w-24" />
      <Skeleton className="mb-3 h-6 w-3/4" />
      <Skeleton className="mb-4 h-16 w-full" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
  )
}

export function BlogPreviewSkeleton() {
  return (
    <div className="border border-[var(--deg-gray-light)] bg-[var(--deg-dark)] p-6">
      <Skeleton className="mb-3 h-4 w-32" />
      <Skeleton className="mb-3 h-6 w-full" />
      <Skeleton className="mb-4 h-16 w-full" />
      <Skeleton className="h-4 w-24" />
    </div>
  )
}

export function VideoThumbnailSkeleton() {
  return (
    <div className="group relative">
      <Skeleton className="aspect-[9/16] w-full" />
      <div className="mt-2">
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

export function DealCardSkeleton() {
  return (
    <div className="border-2 border-[var(--deg-gray-light)] bg-[var(--deg-dark)] p-6">
      <Skeleton className="mb-4 h-12 w-12" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-12 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}

export function CommunityCardSkeleton() {
  return (
    <div className="border border-[var(--deg-gray-light)] bg-[var(--deg-dark)] p-6">
      <Skeleton className="mb-4 h-12 w-12 rounded-full" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-16 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}
