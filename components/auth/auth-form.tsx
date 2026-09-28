"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthShowcase } from "@/components/auth/auth-showcase";

type AuthMode = "login" | "signup";

const COPY: Record<AuthMode, { heading: string; body: string; eyebrow: string; title: string; cta: string; switchLabel: string; switchHref: string; switchCta: string }> = {
  login: {
    heading: "Sign in with ease",
    body: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    eyebrow: "Sign In",
    title: "Welcome Back",
    cta: "Sign In",
    switchLabel: "New user?",
    switchHref: "/signup",
    switchCta: "Create an account",
  },
  signup: {
    heading: "Sign up and come in",
    body: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    cta: "Continue",
    switchLabel: "Already have an account?",
    switchHref: "/login",
    switchCta: "Login",
  },
};

export function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = COPY[mode];

  return (
    <main className="grid-bg grid min-h-screen items-center bg-brand p-5 text-white">
      <div className="mx-auto grid w-full max-w-content items-center gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <Logo inverted />
          <div className="max-w-sm space-y-3">
            <h1 className="text-2xl font-semibold md:text-3xl">{copy.heading}</h1>
            <p className="text-sm text-white/80">{copy.body}</p>
          </div>
          <AuthShowcase className="mt-6" />
        </div>

        <form
          className="space-y-4 rounded-card bg-white p-8 text-ink shadow-xl"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <p className="text-xs font-medium text-brand">{copy.eyebrow}</p>
          <h2 className="text-2xl font-semibold">{copy.title}</h2>

          {mode === "signup" && (
            <label className="block text-xs font-medium">
              Full Name
              <Input name="fullName" placeholder="Jamie Davis" required className="mt-1" autoComplete="name" />
            </label>
          )}

          <label className="block text-xs font-medium">
            Email
            <Input type="email" name="email" placeholder="designer@example.com" required className="mt-1" autoComplete="email" />
          </label>

          <label className="block text-xs font-medium">
            Password
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              minLength={8}
              className="mt-1"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
          </label>

          <Button type="submit" className="ml-auto flex">
            {copy.cta}
          </Button>

          <p className="pt-4 text-center text-xs text-muted">
            {copy.switchLabel}{" "}
            <Link href={copy.switchHref} className="font-medium text-brand">
              {copy.switchCta}
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
