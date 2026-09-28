import Image from "next/image";

/** The central hero illustration: dome, student photo, and floating stat cards. */
export function HeroStage() {
  return (
    <div className="relative mx-auto mt-10 h-[300px] max-w-3xl md:h-[420px]">
      <Image
        src="/images/hero/hero-dome.png"
        alt=""
        width={900}
        height={420}
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[75%] w-[85%] -translate-x-1/2 object-contain object-bottom"
      />

      <Image
        src="/images/hero/hero-student.png"
        alt="Student wearing headphones, learning online with a laptop"
        width={520}
        height={560}
        priority
        className="absolute bottom-0 left-1/2 z-10 h-full w-auto -translate-x-1/2 object-contain object-bottom"
      />

      <div className="absolute left-[8%] top-[38%] z-20 w-40 rounded-2xl bg-white p-3 text-left text-ink shadow-lg md:left-[14%]">
        <p className="text-xs font-semibold">UI/UX Design</p>
        <p className="text-[10px] text-muted">200 Courses &middot; 1000+ Students</p>
      </div>

      <div className="absolute right-[10%] top-[34%] z-20 w-32 rounded-2xl bg-white p-3 text-left text-ink shadow-lg md:right-[16%]">
        <p className="text-[10px] text-muted">Learning Progress</p>
        <p className="text-lg font-semibold text-brand">55%</p>
        <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
          <div className="h-full w-[55%] rounded-full bg-brand" />
        </div>
      </div>

      <Image
        src="/images/hero/badge-students.png"
        alt="4.5 rating from over 2,000 happy students"
        width={280}
        height={90}
        className="absolute bottom-[6%] left-[16%] z-20 w-40 md:left-[24%]"
      />
    </div>
  );
}
