import type { Testimonial } from "@/constants/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-card border border-border p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 shrink-0 rounded-full bg-gray-200" aria-hidden />
        <figcaption>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-brand">{testimonial.role}</p>
        </figcaption>
      </div>
      <blockquote className="mt-4 text-sm text-muted">&ldquo;{testimonial.quote}&rdquo;</blockquote>
    </figure>
  );
}
