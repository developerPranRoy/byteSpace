export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  price: number;
  rating: number;
  level: CourseLevel;
  lessons: number;
  duration: string;
  comments: number;
  studentsLabel: string;
  thumbnail: string;
}
