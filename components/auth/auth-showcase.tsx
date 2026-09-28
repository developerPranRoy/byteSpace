import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Reused decorative course-card cluster shown beside the login/signup forms.
 * Purely illustrative — hidden below md to keep the form the focus on mobile.
 */
export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("relative hidden h-[340px] w-[373px] md:block", className)} aria-hidden>
      <Image
        src="/images/cards/card-asset.png"
        alt=""
        width={373}
        height={384}
        className="absolute left-0 top-[89px] w-[188px] rounded-card shadow-lg"
      />
      <Image
        src="/images/cards/card-data.png"
        alt=""
        width={373}
        height={384}
        className="absolute left-[111px] top-0 z-10 w-[188px] rounded-card shadow-lg"
      />
      <Image
        src="/images/decor/ring.png"
        alt=""
        width={150}
        height={150}
        className="absolute left-[70px] top-[-24px] z-20 w-16"
      />
      <Image
        src="/images/decor/pyramid.png"
        alt=""
        width={150}
        height={150}
        className="absolute -left-2 bottom-[10px] z-20 w-16"
      />
      <Image
        src="/images/decor/squiggle-white.png"
        alt=""
        width={170}
        height={170}
        className="absolute right-2 top-[130px] z-20 w-14"
      />
      <Image
        src="/images/hero/badge-students.png"
        alt=""
        width={261}
        height={123}
        className="absolute bottom-0 right-0 z-20 w-40"
      />
    </div>
  );
}
