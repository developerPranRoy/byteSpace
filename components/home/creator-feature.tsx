import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { CREATOR_PERKS } from "@/constants/perks";

export function CreatorFeature() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 h-64 rounded-card bg-lime/30 md:order-1 md:h-80" aria-hidden />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold leading-tight md:text-4xl">Create &amp; Manage Courses Easily.</h2>
          <p className="mt-4 text-sm text-muted md:text-base">
            ByteSpace supports individuals or entities in the creation, publication, and administration of
            educational courses.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {CREATOR_PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-2">
                <Check size={16} className="text-brand" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
