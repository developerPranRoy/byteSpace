import type { LucideIcon } from "lucide-react";
import { Paintbrush, Code2, Cpu, Briefcase, Megaphone, Camera } from "lucide-react";

export interface LearningPath {
  label: string;
  icon: LucideIcon;
}

export const LEARNING_PATHS: LearningPath[] = [
  { label: "Design", icon: Paintbrush },
  { label: "Development", icon: Code2 },
  { label: "IT & Software", icon: Cpu },
  { label: "Business", icon: Briefcase },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];
