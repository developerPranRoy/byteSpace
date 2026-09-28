"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Wire this up to a real newsletter endpoint when the backend is ready.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return <p className="text-sm font-medium text-brand">Thanks — check your inbox to confirm.</p>;
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input type="email" name="email" placeholder="Enter your email" aria-label="Email address" required className="rounded-full" />
      <Button type="submit">Search</Button>
    </form>
  );
}
