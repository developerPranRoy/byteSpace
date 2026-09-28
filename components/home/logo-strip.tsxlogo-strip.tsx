import {
  Waves,
  Sparkles,
  Zap,
  CircleDot,
  Infinity as InfinityIcon,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const PARTNERS = [
  { name: "Logoipsum", icon: Waves },
  { name: "Logoipsum", icon: Sparkles },
  { name: "Logoipsum", icon: Zap },
  { name: "Logoipsum", icon: CircleDot },
  { name: "Logoipsum", icon: InfinityIcon },
];

export function LogoStrip() {
  return (
    <section
      className="border-b border-border bg-gray-50 py-8"
      aria-label="Trusted by"
    >
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
          {PARTNERS.map(({ name, icon: Icon }, i) => (
            <li key={i} className="flex items-center gap-2 text-muted">
              <Icon size={22} />
              <span className="text-lg font-bold">{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
