import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/layout/container";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { FOOTER_COLUMNS } from "@/constants/footer-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-14 md:grid-cols-2">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-sm text-muted">
            Stay up to date with our latest features and releases by joining our newsletter.
          </p>
          <NewsletterForm />
          <p className="text-xs text-muted">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
