import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseGrid } from "@/components/course/course-grid";

export function CourseExplorer() {
  return (
    <section id="courses" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="mb-10"
        />
        <CourseGrid />
      </Container>
    </section>
  );
}
