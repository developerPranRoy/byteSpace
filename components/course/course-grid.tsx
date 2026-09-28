"use client";

import { useState } from "react";
import { useCourses } from "@/hooks/use-courses";
import { CategoryChips } from "@/components/course/category-chips";
import { CourseCard } from "@/components/course/course-card";
import { CourseCardSkeleton } from "@/components/course/course-card-skeleton";
import { Button } from "@/components/ui/button";
import type { Category } from "@/constants/categories";

export function CourseGrid() {
  const [category, setCategory] = useState<Category>("Featured");
  const { data: courses, isLoading, isError, refetch } = useCourses(category);

  return (
    <div className="space-y-8">
      <CategoryChips active={category} onChange={setCategory} />

      {isError && (
        <div role="alert" className="mx-auto max-w-sm text-center text-sm">
          <p className="text-ink">Couldn&apos;t load courses right now.</p>
          <Button variant="outline" size="sm" className="mt-3" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      )}

      {!isError && (
        <div className="grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {isLoading && Array.from({ length: 6 }).map((_, i) => <CourseCardSkeleton key={i} />)}

          {!isLoading && courses?.map((course) => <CourseCard key={course.id} course={course} />)}

          {!isLoading && courses?.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-muted">
              No courses in this category yet. Try another category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
