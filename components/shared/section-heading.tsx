import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "mx-auto text-center", className)}>
      <h2 className={cn("text-2xl font-semibold leading-tight md:text-4xl", inverted ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm md:text-base",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl",
            inverted ? "text-white/80" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
