import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border border-border bg-gray-50 px-3 text-sm text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-brand",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
