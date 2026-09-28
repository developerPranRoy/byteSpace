import { Container } from "@/components/layout/container";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function GrowthSection() {
  return (
    <section className="bg-gradient-to-b from-lime/20 to-white py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold leading-tight md:text-4xl">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted md:text-base">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
            career journey. Whether you&apos;re looking to sharpen specific skills or embark on a new career path,
            we have the resources you need.
          </p>
          <dl className="mt-8 flex gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-brand">{stat.value}</dt>
                <dd className="text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="h-64 rounded-card bg-brand/10 md:h-80" aria-hidden />
      </Container>
    </section>
  );
}
