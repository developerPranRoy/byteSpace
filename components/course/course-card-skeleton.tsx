export function CourseCardSkeleton() {
  return (
    <div className="animate-pulse rounded-card border border-border p-3">
      <div className="h-40 rounded-2xl bg-gray-100" />
      <div className="mt-3 h-4 w-3/4 rounded bg-gray-100" />
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
      <div className="mt-4 h-6 w-full rounded bg-gray-100" />
    </div>
  );
}
