import Image from "next/image";
import { cn } from "@/lib/utils";

interface DecorImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Purely decorative artwork (3D shapes, illustrations).
 * Always `aria-hidden` since it adds no information for assistive tech.
 */
export function DecorImage({ src, alt = "", width, height, className }: DecorImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={alt === ""}
      className={cn("pointer-events-none select-none absolute", className)}
    />
  );
}
