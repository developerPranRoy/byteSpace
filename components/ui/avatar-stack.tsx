import { cn } from "@/lib/utils";

interface AvatarStackProps {
  count?: number;
  label?: string;
  className?: string;
}

/** Placeholder avatar cluster used until real learner photos are wired up. */
export function AvatarStack({ count = 3, label, className }: AvatarStackProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} aria-hidden className="h-6 w-6 rounded-full border-2 border-white bg-gray-300" />
        ))}
      </div>
      {label && <span className="text-xs text-muted">{label}</span>}
    </div>
  );
}
