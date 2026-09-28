"use client";

import { CATEGORIES, type Category } from "@/constants/categories";
import { Button } from "@/components/ui/button";

interface CategoryChipsProps {
  active: Category;
  onChange: (category: Category) => void;
}

export function CategoryChips({ active, onChange }: CategoryChipsProps) {
  return (
    <div role="tablist" aria-label="Course categories" className="flex flex-wrap justify-center gap-2">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          role="tab"
          aria-selected={active === category}
          data-active={active === category}
          variant="chip"
          size="sm"
          onClick={() => onChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
