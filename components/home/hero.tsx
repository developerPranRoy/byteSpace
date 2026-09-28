import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { DecorImage } from "@/components/shared/decor-image";
import { HeroStage } from "@/components/home/hero-stage";
import { HeroSearchForm } from "@/components/home/hero-search-form";

export function Hero() {
  return (
    <header className="grid-bg relative overflow-hidden bg-brand text-white">
      <Navbar />

      <Container className="relative pb-0 pt-14 text-center md:pt-20">
        <h1 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <HeroSearchForm />

        <DecorImage src="/images/decor/squiggle-lime.png" width={200} height={260} className="left-[-24px] top-36 hidden w-24 md:block lg:left-8" />
        <DecorImage src="/images/decor/squiggle-white.png" width={170} height={170} className="left-24 top-64 hidden w-12 opacity-90 md:block lg:left-44" />
        <DecorImage src="/images/decor/ring.png" width={150} height={150} className="bottom-10 left-0 hidden w-20 md:block lg:left-4" />
        <DecorImage src="/images/decor/pyramid.png" width={150} height={150} className="right-4 top-48 hidden w-16 md:block lg:right-16" />
        <DecorImage src="/images/decor/pyramid.png" width={150} height={150} className="-bottom-2 right-0 hidden w-14 rotate-[100deg] opacity-80 md:block lg:right-10" />

        <HeroStage />
      </Container>
    </header>
  );
}
