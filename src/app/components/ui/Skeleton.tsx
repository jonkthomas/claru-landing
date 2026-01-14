"use client";

import { cn } from "@/app/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-[var(--bg-secondary)] animate-pulse rounded",
        className,
      )}
    />
  );
}

interface SectionSkeletonProps {
  className?: string;
  minHeight?: string;
}

export function SectionSkeleton({
  className,
  minHeight = "min-h-[60vh]",
}: SectionSkeletonProps) {
  return (
    <div
      className={cn("w-full", minHeight, "bg-[var(--bg-primary)]", className)}
    >
      <div className="container mx-auto px-6 py-20">
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-4 w-96 max-w-full mb-2" />
        <Skeleton className="h-4 w-72 max-w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      </div>
    </div>
  );
}
