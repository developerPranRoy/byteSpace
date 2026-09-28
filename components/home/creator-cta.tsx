import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";

export function CreatorCta() {
  return (
    <section id="creators" className="grid-bg bg-brand py-16 text-white md:py-24">
      <Container className="text-center">
        <SectionHeading
          inverted
          title="Unlock Your Potential as a Creator with ByteSpace"
          description="Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <Link href="/signup" className={buttonVariants({ className: "mt-6" })}>
          Join as Creator
        </Link>
      </Container>
    </section>
  );
}
