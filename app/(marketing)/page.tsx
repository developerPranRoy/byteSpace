import { Hero } from "@/components/home/hero";
import { CourseExplorer } from "@/components/home/course-explorer";
import { LearningPaths } from "@/components/home/learning-paths";
import { GrowthSection } from "@/components/home/growth-section";
import { CreatorFeature } from "@/components/home/creator-feature";
import { CreatorCta } from "@/components/home/creator-cta";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoStrip } from "@/components/home/logo-strip.tsxlogo-strip";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <LearningPaths />
      <GrowthSection />
      <CreatorFeature />
      <CreatorCta />
      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
