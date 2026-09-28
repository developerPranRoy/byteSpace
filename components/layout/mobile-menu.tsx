"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PRIMARY_NAV } from "@/constants/nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full text-white"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-30 border-t border-white/10 bg-brand px-5 pb-6 pt-4 text-white shadow-lg">
          <nav className="flex flex-col gap-4 text-sm">
            {PRIMARY_NAV.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ variant: "outline" }), "bg-transparent text-white")}
            >
              Sign In
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)} className={buttonVariants({ variant: "primary" })}>
              Join Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
