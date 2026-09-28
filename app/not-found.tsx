import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <div className="grid-bg bg-brand text-white">
        <Navbar />
        <Container className="flex flex-col items-center gap-4 py-24 text-center">
          <p className="text-8xl font-semibold text-lime md:text-9xl">404</p>
          <h1 className="text-2xl font-semibold md:text-3xl">The page you are looking for doesn&apos;t exist</h1>
          <p className="max-w-sm text-sm text-white/80">
            Try using a correct url or go back to homepage to start again.
          </p>
          <Link href="/" className={buttonVariants({ className: "mt-2" })}>
            Back to Home
          </Link>
        </Container>
      </div>
      <SiteFooter />
    </main>
  );
}
