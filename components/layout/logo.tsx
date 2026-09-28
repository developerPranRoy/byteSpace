import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-display text-base font-semibold", inverted ? "text-white" : "text-ink", className)}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime text-sm text-ink" aria-hidden>
        b
      </span>
      ByteSpace
    </Link>
  );
}
