import Image from "next/image";
import { Star } from "lucide-react";
import type { Course } from "@/types/course";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { Badge } from "@/components/ui/badge";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-card border border-border bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-40 overflow-hidden rounded-2xl">
        <Image src={course.thumbnail} alt={course.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          <Badge className="bg-white/90 backdrop-blur">{course.lessons} Lessons</Badge>
          <Badge className="bg-white/90 backdrop-blur">{course.duration}</Badge>
          <Badge className="bg-white/90 backdrop-blur">{course.comments} Comments</Badge>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug">{course.title}</h3>
        <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
          {course.rating} <Star size={12} className="fill-lime text-lime" />
        </span>
      </div>

      <p className="text-xs text-brand">by {course.author}</p>

      <div className="mt-3 flex items-center justify-between">
        <Badge>{course.level}</Badge>
        <AvatarStack label={course.studentsLabel} />
      </div>

      <p className="mt-3 text-sm font-semibold text-brand">
        ${course.price}
        <span className="font-normal text-muted"> /lifetime</span>
      </p>
    </article>
  );
}
