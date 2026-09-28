export const CATEGORIES = [
  "Featured",
  "Marketing",
  "UI/UX Design",
  "Data Science",
  "Productivity",
  "Freelance & Entrepreneurship",
] as const;

export type Category = (typeof CATEGORIES)[number];
