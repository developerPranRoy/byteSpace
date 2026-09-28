import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/home/testimonial-card";
import { TESTIMONIALS } from "@/constants/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          align="left"
          title="Discover What Our Community Is Saying"
          description="Hear directly from those who have experienced the transformative journey of learning and creating on our platform."
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
