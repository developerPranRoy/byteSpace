export interface FooterColumn {
  title: string;
  links: string[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Explore", links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
  { title: "Categories", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "Company", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];
