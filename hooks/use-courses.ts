"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/lib/courses-service";
import type { Category } from "@/constants/categories";

export function useCourses(category: Category) {
  return useQuery({
    queryKey: ["courses", category],
    queryFn: () => fetchCourses(category),
    staleTime: 60_000,
  });
}
