import { apiClient } from "@/lib/api-client";
import type { Course } from "@/types/course";
import type { Category } from "@/constants/categories";

export async function fetchCourses(category?: Category): Promise<Course[]> {
  return apiClient<Course[]>("/courses", {
    query: category && category !== "Featured" ? { category } : undefined,
  });
}
