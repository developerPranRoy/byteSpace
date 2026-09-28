import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { PRIMARY_NAV } from "@/constants/nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="relative">
      <Container className="flex h-[70px] items-center justify-between text-sm text-white">
        <Logo inverted />

        <div className="hidden gap-8 sm:flex" aria-label="Primary">
          {PRIMARY_NAV.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-lime">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <Link href="/login" className="transition-colors hover:text-lime">
            Sign In
          </Link>
          <Link href="/signup" className={cn(buttonVariants({ size: "sm" }))}>
            Join Us
          </Link>
          <Link href="/cart" aria-label="Shopping cart" className="transition-colors hover:text-lime">
            <ShoppingBag size={18} />
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </nav>
  );
}
