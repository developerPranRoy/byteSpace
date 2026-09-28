# ByteSpace

Frontend implementation of the ByteSpace landing page, plus login and signup,
built from the Figma design.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — design tokens (brand colors, radii, fonts) in `tailwind.config.ts`
- **shadcn/ui-style primitives** — hand-written `Button`, `Input`, `Badge` using
  `class-variance-authority` + `tailwind-merge`, following the shadcn pattern
- **TanStack Query** — data fetching, caching, loading/error states
- **ofetch** — typed fetch client
- **lucide-react** — icons

No backend exists yet, so `/api/courses` is a mock Next.js Route Handler
returning static data, matching the shape a real REST API would return.

## Getting started

```bash
npm install
```

Then add the Satoshi font file — see `app/fonts/README.md` for the two-minute
setup (or swap it for a Google Font).

```bash
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  (marketing)/page.tsx       Landing page route
  (auth)/login/page.tsx      Login route
  (auth)/signup/page.tsx     Signup route
  api/courses/route.ts       Mock REST endpoint
  layout.tsx                 Root layout: fonts, providers
  not-found.tsx              404 page
components/
  ui/                        Design-system primitives (Button, Input, Badge, AvatarStack)
  layout/                    Navbar, SiteFooter, Logo, Container, MobileMenu
  shared/                    SectionHeading, DecorImage — reused across sections
  course/                    CourseCard, CategoryChips, CourseGrid, skeleton
  home/                      One component per landing-page section
  auth/                      AuthForm (login/signup), AuthShowcase
lib/                         cn() helper, ofetch client, courses service
hooks/                       useCourses (TanStack Query)
types/                       Shared TypeScript interfaces
constants/                   Static content: nav links, categories, footer, testimonials
public/images/
  decor/                     3D decorative shapes (ring, pyramid, squiggles)
  hero/                      Hero illustration assets
  cards/                     Course thumbnail photography
```

## Design decisions

- **Images vs. code**: static artwork (3D shapes, photography) is shipped as
  optimized PNGs via `next/image`. Anything that is UI — text, numbers,
  buttons, progress bars, cards — is real markup driven by data/props, never
  baked into an image, so it stays dynamic and accessible.
- **Data flow**: `CourseGrid` is the only client component in the course
  explorer; category filtering re-triggers a TanStack Query fetch to
  `/api/courses?category=...`, with distinct loading (skeletons), error
  (retry button) and empty states.
- **Accessibility**: semantic landmarks (`header`, `nav`, `main`, `footer`),
  visible focus rings, `aria-hidden` on decorative images, labelled form
  inputs, `role="tablist"` on the category filter.
- **Responsiveness**: fluid from 320px to 1440px+; the desktop nav collapses
  into a `MobileMenu` below the `sm` breakpoint; the hero's floating stat
  cards and decorative shapes hide below `md` to avoid crowding.

## Git workflow

```bash
git init
git checkout -b feature/landing-page
git add .
git commit -m "feat: implement ByteSpace landing page"
git remote add origin <your-repo-url>
git push -u origin feature/landing-page
```

Open a Pull Request from `feature/landing-page` into `main`.

## Deployment

Import the repository on [Vercel](https://vercel.com/new) — no environment
variables are required. The `/api/courses` route runs as a serverless
function automatically.

## Known gaps (not required by the brief)

- Course search results page, course detail page, and creator profile page
  are not built (only the landing page + login/signup were required).
- Avatar images in `AvatarStack` and testimonial cards are placeholder
  circles — swap in real photos when available.
