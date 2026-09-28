import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { LEARNING_PATHS } from "@/constants/learning-paths";

export function LearningPaths() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at ByteSpace"
          description="We believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone."
          className="mb-10"
        />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {LEARNING_PATHS.map(({ label, icon: Icon }) => (
            <li key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-border py-6 text-center transition-colors hover:border-brand">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime/40 text-brand">
                <Icon size={18} />
              </span>
              <span className="text-xs font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
