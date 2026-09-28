"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearchForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("query");
    // Wire this up to the course search page once it exists.
    console.info("Search submitted:", query);
  }

  return (
    <form
      className="relative z-20 mx-auto mt-8 flex max-w-md gap-2 rounded-full bg-white p-1.5"
      onSubmit={handleSubmit}
    >
      <Input name="query" placeholder="Course, topic, creator" aria-label="Search courses" className="border-0 bg-transparent text-ink" />
      <Button type="submit">Search</Button>
    </form>
  );
}
