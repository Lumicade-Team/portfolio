# Shadcn UI + Phosphor Icons Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all hardcoded UI primitives with Shadcn UI components and all inline SVG icons with Phosphor Icons.

**Architecture:** Shadcn CLI initializes the component foundation (`cn()`, CSS variables, `components/ui/`). Components are migrated from high to low priority — interactive components first (Accordion, Dialog, Sheet), then structural (Button, Card, Badge, Avatar), then icons last.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Shadcn UI, Radix UI primitives, `@phosphor-icons/react`

---

## File Map

### New Files (created by Shadcn CLI + manual)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `components.json` — Shadcn configuration
- `src/components/ui/accordion.tsx` — Shadcn Accordion
- `src/components/ui/dialog.tsx` — Shadcn Dialog
- `src/components/ui/sheet.tsx` — Shadcn Sheet
- `src/components/ui/button.tsx` — Shadcn Button
- `src/components/ui/card.tsx` — Shadcn Card
- `src/components/ui/badge.tsx` — Shadcn Badge
- `src/components/ui/avatar.tsx` — Shadcn Avatar

### Modified Files
- `src/styles/index.css` — Shadcn CSS variables added, Material Symbols removed
- `src/components/Pricing/FaqAccordion.tsx` — rewrite with Shadcn Accordion
- `src/components/video-modal.tsx` — rewrite with Shadcn Dialog
- `src/components/Header/index.tsx` — mobile menu → Shadcn Sheet, hamburger → Phosphor `<List>`, CTA → Shadcn Button
- `src/components/Video/index.tsx` — Material Symbols `arrow_forward` → Phosphor `<ArrowRight>`
- `src/components/Hero/index.tsx` — CTA links → Shadcn Button
- `src/components/Pricing/PricingCard.tsx` — CheckIcon SVG → Phosphor `<Check>`, CTA → Shadcn Button
- `src/components/Pricing/OfferList.tsx` — check/cross SVGs → Phosphor `<Check>`, `<X>`
- `src/components/Contact/index.tsx` — CTA → Shadcn Button
- `src/components/ScrollToTop/index.tsx` — CSS arrow → Phosphor `<CaretUp>`, div → Shadcn Button
- `src/components/Header/ThemeToggler.tsx` — SVG sun/moon → Phosphor `<Sun>`, `<Moon>`, button → Shadcn Button
- `src/components/Features/SingleFeature.tsx` — wrapper → Shadcn Card
- `src/components/Features/featuresData.tsx` — 6 inline SVGs → Phosphor icons
- `src/components/Blog/SingleBlog.tsx` — tag → Shadcn Badge, avatar → Shadcn Avatar
- `src/components/Blog/index.tsx` — tag spans → Shadcn Badge, SVGs → Phosphor icons, CTA → Shadcn Button
- `src/components/Blog/SharePost.tsx` — social SVGs → Phosphor icons
- `src/components/Testimonials/SingleTestimonial.tsx` — star SVG → Phosphor `<Star>`, avatar → Shadcn Avatar
- `src/components/About/aboutData.tsx` — 4 inline SVGs → Phosphor icons
- `src/components/About/TechStackCTA.tsx` — arrow SVG → Phosphor `<ArrowRight>`, CTA → Shadcn Button

---

## Task 1: Initialize Shadcn UI + Install Phosphor Icons

**Files:**
- Create: `components.json`, `src/lib/utils.ts`
- Modify: `src/styles/index.css`, `package.json`

- [ ] **Step 1: Install Phosphor Icons**

```bash
npm install @phosphor-icons/react
```

- [ ] **Step 2: Initialize Shadcn UI**

Run the Shadcn CLI init. When prompted, select these options:
- Style: Default
- Base color: Neutral
- CSS file: `src/styles/index.css`
- CSS variables: Yes
- Path alias for components: `@/components`
- Path alias for utils: `@/lib`

```bash
npx shadcn@latest init
```

If the CLI fails or prompts are incompatible with Tailwind v4, create the files manually:

Create `components.json`:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

Create `src/lib/utils.ts`:
```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install the utility dependencies if not already added by the CLI:
```bash
npm install clsx tailwind-merge class-variance-authority
```

- [ ] **Step 3: Verify the setup builds**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add components.json src/lib/utils.ts src/styles/index.css package.json package-lock.json
git commit -m "chore: initialize Shadcn UI and install Phosphor Icons"
```

---

## Task 2: Replace FaqAccordion with Shadcn Accordion

**Files:**
- Create: `src/components/ui/accordion.tsx` (via CLI)
- Modify: `src/components/Pricing/FaqAccordion.tsx`

- [ ] **Step 1: Add the Shadcn Accordion component**

```bash
npx shadcn@latest add accordion
```

This creates `src/components/ui/accordion.tsx` and installs `@radix-ui/react-accordion`.

- [ ] **Step 2: Rewrite FaqAccordion.tsx**

Replace the entire contents of `src/components/Pricing/FaqAccordion.tsx` with:

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./pricingData";

const FaqAccordion = () => {
  return (
    <div className="mx-auto max-w-[700px]">
      <h3 className="mb-8 text-center text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="rounded-xl border border-stroke-stroke bg-white dark:border-lumi-mutednav dark:bg-dark"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold text-lumi-navy hover:no-underline dark:text-lumi-offwhite">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
```

- [ ] **Step 3: Verify it builds and renders**

```bash
npm run build
```

Expected: Build succeeds. The FAQ section on the pricing page renders with expand/collapse behavior via Shadcn's built-in chevron animation.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/accordion.tsx src/components/Pricing/FaqAccordion.tsx package.json package-lock.json
git commit -m "feat: replace FaqAccordion with Shadcn Accordion"
```

---

## Task 3: Replace VideoModal with Shadcn Dialog

**Files:**
- Create: `src/components/ui/dialog.tsx` (via CLI)
- Modify: `src/components/video-modal.tsx`

- [ ] **Step 1: Add the Shadcn Dialog component**

```bash
npx shadcn@latest add dialog
```

- [ ] **Step 2: Rewrite video-modal.tsx**

Replace the entire contents of `src/components/video-modal.tsx` with:

```tsx
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}`;
  } else {
    src = props.src;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-none bg-gray-900 p-0 [&>button]:text-white [&>button]:opacity-70 [&>button]:hover:opacity-100">
        <DialogTitle className="sr-only">Video</DialogTitle>
        <iframe width="100%" height="500" src={src} allowFullScreen />
      </DialogContent>
    </Dialog>
  );
}
```

- [ ] **Step 3: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds. The video modal opens/closes with focus trap, ESC key support, and overlay click-to-close.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/dialog.tsx src/components/video-modal.tsx package.json package-lock.json
git commit -m "feat: replace VideoModal with Shadcn Dialog"
```

---

## Task 4: Replace Header Mobile Menu with Shadcn Sheet

**Files:**
- Create: `src/components/ui/sheet.tsx` (via CLI)
- Modify: `src/components/Header/index.tsx`

- [ ] **Step 1: Add the Shadcn Sheet component**

```bash
npx shadcn@latest add sheet
```

- [ ] **Step 2: Rewrite Header/index.tsx**

Replace the entire contents of `src/components/Header/index.tsx` with:

```tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { List } from "@phosphor-icons/react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menuData from "./menuData";

const Header = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  // Track active section based on scroll position
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = ["home", "services", "products", "process", "testimonials"];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle nav link clicks — smooth scroll for anchor links
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      setSheetOpen(false);

      if (path.startsWith("/#")) {
        const hash = path.slice(2);

        if (pathname === "/") {
          e.preventDefault();
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    },
    [pathname],
  );

  // Check if a menu item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" && (!activeSection || activeSection === "home");
    }
    if (path.startsWith("/#")) {
      return pathname === "/" && activeSection === path.slice(2);
    }
    return pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-high/60 backdrop-blur-xl shadow-glass">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/imgs/Lumicade-Solutions-Logo-4096.svg"
            alt="Lumicade Solutions"
            width={60}
            height={60}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          {menuData.map((menuItem) => (
            <li key={menuItem.id}>
              <Link
                href={menuItem.path!}
                onClick={(e) => handleNavClick(e, menuItem.path!)}
                className={`font-headline text-sm tracking-wide font-medium uppercase transition-colors ${
                  isActive(menuItem.path!)
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile menu button */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden lg:inline-block px-6 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-sm font-bold uppercase rounded-md active:scale-90 transition-transform"
          >
            Get Started
          </Link>

          {/* Mobile Sheet */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Mobile Menu"
                className="lg:hidden text-on-surface"
              >
                <List size={28} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-surface-container-high/95 backdrop-blur-xl border-outline-variant/10 w-72"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <ul className="flex flex-col py-8 space-y-6">
                {menuData.map((menuItem) => (
                  <li key={menuItem.id}>
                    <Link
                      href={menuItem.path!}
                      onClick={(e) => handleNavClick(e, menuItem.path!)}
                      className={`font-headline text-sm tracking-wide font-medium uppercase transition-colors ${
                        isActive(menuItem.path!)
                          ? "text-on-surface"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, "/#contact")}
                    className="inline-block px-6 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline text-sm font-bold uppercase rounded-md active:scale-90 transition-transform"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

- [ ] **Step 3: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds. Mobile menu slides in from the right with overlay, keyboard navigation, and ESC-to-close.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/sheet.tsx src/components/Header/index.tsx package.json package-lock.json
git commit -m "feat: replace Header mobile menu with Shadcn Sheet + Phosphor List icon"
```

---

## Task 5: Add Shadcn Button and Replace All CTA Buttons

**Files:**
- Create: `src/components/ui/button.tsx` (via CLI)
- Modify: `src/components/Hero/index.tsx`, `src/components/Contact/index.tsx`, `src/components/ScrollToTop/index.tsx`, `src/components/Header/ThemeToggler.tsx`, `src/components/Pricing/PricingCard.tsx`, `src/components/About/TechStackCTA.tsx`, `src/components/Blog/index.tsx`

- [ ] **Step 1: Add the Shadcn Button component**

```bash
npx shadcn@latest add button
```

- [ ] **Step 2: Add a custom "gradient" variant to the Button component**

Open `src/components/ui/button.tsx` and add this variant to the `buttonVariants` object inside the `variants.variant` section:

```ts
gradient:
  "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-bold uppercase hover:shadow-[0_0_20px_rgba(151,169,255,0.3)] active:scale-95 transition-all duration-300",
```

- [ ] **Step 3: Replace Hero CTA buttons**

Replace the entire contents of `src/components/Hero/index.tsx` with:

```tsx
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Binary globe background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <svg
          className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] opacity-[0.12]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="binary-grid"
              width="420"
              height="260"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-8)"
            >
              <text x="0" y="32" fill="#97a9ff" fontFamily="monospace" fontSize="28" letterSpacing="6">10110010 01001101</text>
              <text x="70" y="74" fill="#6dddff" fontFamily="monospace" fontSize="28" letterSpacing="6">01001011 10100110</text>
              <text x="15" y="116" fill="#a68cff" fontFamily="monospace" fontSize="28" letterSpacing="6">11010010 01101001</text>
              <text x="100" y="158" fill="#97a9ff" fontFamily="monospace" fontSize="28" letterSpacing="6">00101101 11010100</text>
              <text x="35" y="200" fill="#6dddff" fontFamily="monospace" fontSize="28" letterSpacing="6">10010110 01011010</text>
              <text x="85" y="242" fill="#a68cff" fontFamily="monospace" fontSize="28" letterSpacing="6">01100101 10110011</text>
            </pattern>
            <radialGradient id="globe-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.8" />
              <stop offset="85%" stopColor="white" stopOpacity="0.15" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="globe-mask">
              <rect width="1000" height="1000" fill="url(#globe-fade)" />
            </mask>
          </defs>
          <g mask="url(#globe-mask)">
            <rect width="1000" height="1000" fill="url(#binary-grid)" />
          </g>
          <ellipse cx="500" cy="500" rx="420" ry="420" fill="none" stroke="#97a9ff" strokeWidth="0.5" opacity="0.3" />
          <ellipse cx="500" cy="500" rx="420" ry="180" fill="none" stroke="#6dddff" strokeWidth="0.5" opacity="0.2" />
          <ellipse cx="500" cy="500" rx="180" ry="420" fill="none" stroke="#a68cff" strokeWidth="0.5" opacity="0.2" />
          <ellipse cx="500" cy="500" rx="300" ry="420" fill="none" stroke="#97a9ff" strokeWidth="0.3" opacity="0.15" />
          <ellipse cx="500" cy="500" rx="420" ry="300" fill="none" stroke="#6dddff" strokeWidth="0.3" opacity="0.15" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
          We Architect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Digital Excellence.
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Crafting bespoke software solutions and high-performance SaaS for
          visionary brands who demand precision engineering.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button variant="gradient" size="lg" asChild>
            <a href="#services" className="w-full md:w-auto px-10 py-4 text-base">
              Explore Our Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="#contact"
              className="w-full md:w-auto px-10 py-4 border-outline-variant/30 text-on-surface font-headline text-base font-extrabold uppercase hover:bg-white/5"
            >
              Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 4: Replace Contact CTA**

Replace the entire contents of `src/components/Contact/index.tsx` with:

```tsx
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-3xl p-12 md:p-24 text-center relative overflow-hidden border border-outline-variant/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to scale <br />
              your vision?
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl mx-auto mb-12">
              Join the elite brands working with Lumicade to build the next
              generation of digital excellence.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a
                href="mailto:hello@lumicade.dev"
                className="px-12 py-5 text-lg shadow-2xl hover:scale-105 active:scale-95"
              >
                Start a Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 5: Replace ScrollToTop with Shadcn Button + Phosphor icon**

Replace the entire contents of `src/components/ScrollToTop/index.tsx` with:

```tsx
import { useEffect, useState } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="scroll to top"
          size="icon"
          className="bg-primary/80 hover:shadow-signUp text-white shadow-md"
        >
          <CaretUp size={20} weight="bold" />
        </Button>
      )}
    </div>
  );
}
```

- [ ] **Step 6: Replace ThemeToggler with Shadcn Button + Phosphor icons**

Replace the entire contents of `src/components/Header/ThemeToggler.tsx` with:

```tsx
import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      aria-label="theme toggler"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full bg-gray-2 text-black dark:bg-dark-bg dark:text-white h-9 w-9 md:h-14 md:w-14"
    >
      <Sun className="h-5 w-5 dark:hidden md:h-6 md:w-6" />
      <Moon className="hidden h-5 w-5 dark:block md:h-6 md:w-6" />
    </Button>
  );
};

export default ThemeToggler;
```

- [ ] **Step 7: Replace PricingCard CheckIcon + CTA with Phosphor + Button**

Replace the entire contents of `src/components/Pricing/PricingCard.tsx` with:

```tsx
import { Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { pricingCards } from "./pricingData";

const variantStyles = {
  primary: {
    icon: "bg-primary/10 text-primary",
    cta: "bg-primary px-8 py-3 text-base font-semibold text-lumi-offwhite transition hover:bg-primary/90",
  },
  teal: {
    icon: "bg-teal/10 text-teal",
    cta: "border border-teal px-8 py-3 text-base font-semibold text-teal transition hover:bg-teal hover:text-lumi-offwhite",
  },
};

const PricingCards = () => (
  <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
    {pricingCards.map((card) => {
      const styles = variantStyles[card.variant];
      return (
        <div key={card.title} className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">
          <h3 className="mb-2 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            {card.title}
          </h3>
          <p className="mb-6 text-body-color dark:text-body-color-dark">
            {card.subtitle}
          </p>
          <ul className="space-y-3">
            {card.features.map((feature) => (
              <li key={feature} className="flex items-start text-body-color dark:text-body-color-dark">
                <span className={`mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.icon}`}>
                  <Check size={12} weight="bold" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="ghost" asChild className={`mt-8 rounded-lg ${styles.cta}`}>
            <a href={card.cta.href}>
              {card.cta.label}
            </a>
          </Button>
        </div>
      );
    })}
  </div>
);

export default PricingCards;
```

- [ ] **Step 8: Replace TechStackCTA arrow SVG with Phosphor + Button**

In `src/components/About/TechStackCTA.tsx`, replace the arrow SVG and CTA link.

Replace the arrow SVG inside the "Start a Project" link (lines 56-64):

Find:
```tsx
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-lumi-offwhite transition-all hover:bg-primary/90"
              >
                Start a Project
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
```

Replace with:
```tsx
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-lumi-offwhite transition-all hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
```

Add the import at the top of the file:
```tsx
import { ArrowRight } from "@phosphor-icons/react";
```

- [ ] **Step 9: Replace Blog index SVGs with Phosphor icons + Button**

In `src/components/Blog/index.tsx`, add import at the top:

```tsx
import { FileText, ArrowRight } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
```

Replace the placeholder SVG (line 40-41):
```tsx
                  <svg className="h-10 w-10 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
```

Replace with:
```tsx
                  <FileText size={40} className="text-primary/20" />
```

Replace the tag spans (lines 48-53):
```tsx
                    <span
                      key={tag}
                      className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold text-teal"
                    >
                      {tag}
                    </span>
```

Replace with:
```tsx
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full bg-teal/10 text-xs font-semibold text-teal hover:bg-teal/20"
                    >
                      {tag}
                    </Badge>
```

Replace the "View All Posts" link + arrow SVG (lines 74-80):
```tsx
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-lumi-offwhite transition hover:bg-primary/90"
            >
              View All Posts
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
```

Replace with:
```tsx
            <Button variant="gradient" asChild>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm"
              >
                View All Posts
                <ArrowRight size={16} />
              </Link>
            </Button>
```

Remove the unused original imports if any conflict.

- [ ] **Step 10: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 11: Commit**

```bash
git add src/components/ui/button.tsx src/components/Hero/index.tsx src/components/Contact/index.tsx src/components/ScrollToTop/index.tsx src/components/Header/ThemeToggler.tsx src/components/Pricing/PricingCard.tsx src/components/About/TechStackCTA.tsx src/components/Blog/index.tsx package.json package-lock.json
git commit -m "feat: replace all CTA buttons with Shadcn Button + Phosphor icons"
```

---

## Task 6: Add Shadcn Card and Replace Card Wrappers

**Files:**
- Create: `src/components/ui/card.tsx` (via CLI)
- Modify: `src/components/Features/SingleFeature.tsx`, `src/components/Testimonials/SingleTestimonial.tsx`

- [ ] **Step 1: Add the Shadcn Card component**

```bash
npx shadcn@latest add card
```

- [ ] **Step 2: Replace SingleFeature card wrapper**

Replace the entire contents of `src/components/Features/SingleFeature.tsx` with:

```tsx
import { Feature } from "@/types/feature";
import { Card, CardContent } from "@/components/ui/card";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, id } = feature;
  const accentColor = id % 2 === 1 ? "border-l-primary" : "border-l-teal";
  const iconBg = id % 2 === 1 ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal";

  return (
    <div className="w-full h-full">
      <Card
        className={`h-full border-l-4 ${accentColor} shadow-card transition-all duration-300 hover:shadow-feature-2 dark:bg-dark`}
        data-wow-delay=".15s"
      >
        <CardContent className="flex h-full flex-col p-8">
          <div className="mb-5 flex items-center gap-4">
            <div className={`${iconBg} flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl`}>
              {icon}
            </div>
            <h3 className="text-xl font-bold text-lumi-navy dark:text-lumi-offwhite">
              {title}
            </h3>
          </div>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium">
            {paragraph}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleFeature;
```

- [ ] **Step 3: Replace SingleTestimonial card wrapper + star icon**

Replace the entire contents of `src/components/Testimonials/SingleTestimonial.tsx` with:

```tsx
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        <Star size={18} weight="fill" />
      </span>,
    );
  }

  return (
    <div className="h-full w-full">
      <Card className="h-full shadow-card hover:shadow-feature-2 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark duration-300">
        <CardContent className="flex h-full flex-col p-8 lg:px-5 xl:px-8">
          <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
          <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-8 flex-1 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-white">
            &ldquo;{content}&rdquo;
          </p>
          <div className="mt-auto flex items-center">
            <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
              <h3 className="text-lumi-navy mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-lumi-offwhite">
                {name}
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-sm">{designation}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleTestimonial;
```

- [ ] **Step 4: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/card.tsx src/components/Features/SingleFeature.tsx src/components/Testimonials/SingleTestimonial.tsx package.json package-lock.json
git commit -m "feat: replace feature and testimonial cards with Shadcn Card + Phosphor Star"
```

---

## Task 7: Add Shadcn Badge + Avatar and Replace Blog/Testimonial Usage

**Files:**
- Create: `src/components/ui/badge.tsx`, `src/components/ui/avatar.tsx` (via CLI)
- Modify: `src/components/Blog/SingleBlog.tsx`

- [ ] **Step 1: Add the Shadcn Badge and Avatar components**

```bash
npx shadcn@latest add badge avatar
```

- [ ] **Step 2: Replace SingleBlog tag + avatar**

Replace the entire contents of `src/components/Blog/SingleBlog.tsx` with:

```tsx
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group shadow-card hover:shadow-feature-2 dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xl bg-white duration-300">
        <Link
          href="/blog-details"
          className="relative block aspect-37/22 w-full"
        >
          <Badge className="absolute top-6 right-6 z-20 bg-teal text-lumi-offwhite hover:bg-teal/90 capitalize">
            {tags[0]}
          </Badge>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-lumi-navy sm:text-2xl dark:text-lumi-offwhite"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color/10 text-body-color dark:text-body-color-dark mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              <Avatar className="mr-4 h-10 w-10">
                <AvatarImage src={author.image} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="w-full">
                <h4 className="text-lumi-navy mb-1 text-sm font-medium dark:text-lumi-offwhite">
                  By {author.name}
                </h4>
                <p className="text-body-color dark:text-body-color-dark text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-lumi-navy mb-1 text-sm font-medium dark:text-lumi-offwhite">
                Date
              </h4>
              <p className="text-body-color dark:text-body-color-dark text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
```

Note: The `author.image` in `SingleBlog` is a string URL, which works with `AvatarImage`. If it's used with Next.js `Image`, `AvatarImage` uses a plain `<img>` tag — this is fine since avatar images are small.

- [ ] **Step 3: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/badge.tsx src/components/ui/avatar.tsx src/components/Blog/SingleBlog.tsx package.json package-lock.json
git commit -m "feat: replace blog tags with Shadcn Badge and author image with Shadcn Avatar"
```

---

## Task 8: Replace All Remaining Inline SVG Icons with Phosphor

**Files:**
- Modify: `src/components/Features/featuresData.tsx`, `src/components/About/aboutData.tsx`, `src/components/Pricing/OfferList.tsx`, `src/components/Blog/SharePost.tsx`, `src/components/Video/index.tsx`

- [ ] **Step 1: Replace featuresData.tsx icons**

Replace the entire contents of `src/components/Features/featuresData.tsx` with:

```tsx
import { Feature } from "@/types/feature";
import {
  Globe,
  Desktop,
  UserGear,
  DeviceMobile,
  Cloud,
  PaintBrush,
} from "@phosphor-icons/react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Globe size={40} />,
    title: "Web Development",
    paragraph:
      "High-performance company sites, landing pages, and web applications built with modern frameworks for speed and scalability.",
  },
  {
    id: 2,
    icon: <Desktop size={40} />,
    title: "Custom Systems & Portals",
    paragraph:
      "Tailored business dashboards, admin portals, and internal tools designed around your exact operational workflows.",
  },
  {
    id: 3,
    icon: <UserGear size={40} />,
    title: "AI Automation & Workflow",
    paragraph:
      "Intelligent automation pipelines and AI-powered integrations that eliminate repetitive work and accelerate decision-making.",
  },
  {
    id: 4,
    icon: <DeviceMobile size={40} />,
    title: "Mobile App Development",
    paragraph:
      "Cross-platform mobile applications across various domains — from consumer apps to enterprise tools, built for iOS and Android.",
  },
  {
    id: 5,
    icon: <Cloud size={40} />,
    title: "SaaS & Microservices",
    paragraph:
      "Our own subscription-based tools and APIs — including OCR data extraction and more in development — ready for you to integrate.",
  },
  {
    id: 6,
    icon: <PaintBrush size={40} />,
    title: "Portfolio & Branding Solutions",
    paragraph:
      "Developer and company portfolio websites that showcase your work with a polished, professional online presence.",
  },
];
export default featuresData;
```

- [ ] **Step 2: Replace aboutData.tsx icons**

In `src/components/About/aboutData.tsx`, replace the icon SVGs in the `whyCards` array.

Replace the entire `whyCards` export with:

```tsx
import {
  Code,
  Devices,
  Brain,
  Flag,
} from "@phosphor-icons/react";

export const whyCards = [
  {
    id: 1,
    title: "End-to-End Development",
    description: "From initial concept and design through to deployment and maintenance — we handle the full lifecycle so you don't juggle multiple vendors.",
    icon: <Code size={28} />,
  },
  {
    id: 2,
    title: "Multi-Domain Expertise",
    description: "Web, mobile, AI, SaaS — our team works across industries and tech stacks to deliver the right solution for every challenge.",
    icon: <Devices size={28} />,
  },
  {
    id: 3,
    title: "AI-First Approach",
    description: "We embed intelligent automation into workflows from day one — not as an afterthought, but as a core design principle.",
    icon: <Brain size={28} />,
  },
  {
    id: 4,
    title: "Subscription-Ready Services",
    description: "Our proprietary SaaS microservices are built for easy integration and available on flexible monthly plans — plug in and go.",
    icon: <Flag size={28} />,
  },
];
```

Keep the rest of the file (`techStack`, `processSteps`, `stats` exports) unchanged.

- [ ] **Step 3: Replace OfferList check/cross SVGs**

Replace the entire contents of `src/components/Pricing/OfferList.tsx` with:

```tsx
import { Check, X } from "@phosphor-icons/react";

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="bg-primary/10 mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full text-white">
        {status === "active" ? (
          <Check size={10} weight="bold" className="fill-current" />
        ) : (
          <X size={10} weight="bold" className="fill-current" />
        )}
      </span>
      <p className="text-body-color dark:text-body-color-dark m-0 text-base font-medium">{text}</p>
    </div>
  );
};

export default OfferList;
```

- [ ] **Step 4: Replace SharePost social SVGs**

Replace the entire contents of `src/components/Blog/SharePost.tsx` with:

```tsx
import { LinkedinLogo, XLogo, FacebookLogo } from "@phosphor-icons/react";

const SharePost = () => {
  return (
    <>
      <a
        href="#0"
        aria-label="share on LinkedIn"
        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary sm:ml-3"
      >
        <LinkedinLogo size={16} weight="fill" />
      </a>
      <a
        href="#0"
        aria-label="share on X"
        className="mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <XLogo size={18} weight="fill" />
      </a>
      <a
        href="#0"
        aria-label="share on Facebook"
        className="mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xs bg-gray-light text-body-color dark:text-body-color-dark duration-300 hover:bg-primary hover:text-white dark:bg-gray-dark dark:hover:bg-primary"
      >
        <FacebookLogo size={18} weight="fill" />
      </a>
    </>
  );
};

export default SharePost;
```

- [ ] **Step 5: Replace Video/index.tsx Material Symbols with Phosphor**

In `src/components/Video/index.tsx`, find all instances of:

```tsx
<span className="material-symbols-outlined">arrow_forward</span>
```

Replace each with:

```tsx
<ArrowRight size={20} />
```

Add the import at the top of the file:

```tsx
import { ArrowRight } from "@phosphor-icons/react";
```

- [ ] **Step 6: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/Features/featuresData.tsx src/components/About/aboutData.tsx src/components/Pricing/OfferList.tsx src/components/Blog/SharePost.tsx src/components/Video/index.tsx
git commit -m "feat: replace all remaining inline SVG icons with Phosphor Icons"
```

---

## Task 9: Remove Material Symbols Font + Cleanup

**Files:**
- Modify: `src/styles/index.css`

- [ ] **Step 1: Remove Material Symbols from the font import**

In `src/styles/index.css`, line 1, the current import URL includes `Material+Symbols+Outlined`. Edit the import to remove it.

Replace:
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap')
```

With:
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap')
```

- [ ] **Step 2: Remove the Material Symbols base style**

In `src/styles/index.css`, remove lines 179-181:

```css
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
```

- [ ] **Step 3: Verify no remaining Material Symbols usage**

Search the codebase for any remaining `material-symbols` or `material_symbols` references:

```bash
grep -r "material-symbols\|material_symbols" src/
```

Expected: No results. If any remain, replace them with the appropriate Phosphor icon.

- [ ] **Step 4: Verify it builds**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/styles/index.css
git commit -m "chore: remove Material Symbols font import and base styles"
```

---

## Task 10: Final Build Verification

- [ ] **Step 1: Run a clean build**

```bash
rm -rf .next && npm run build
```

Expected: Build succeeds with no errors or warnings related to the migration.

- [ ] **Step 2: Run the dev server and visually verify**

```bash
npm run dev
```

Check these pages/sections:
- Homepage: Hero CTAs, Features cards, Pricing accordion + cards, Testimonials, Blog section, Contact CTA
- Mobile: Header sheet menu opens/closes correctly
- Theme toggle: Sun/Moon icons switch correctly
- ScrollToTop: CaretUp icon appears after scrolling
- Blog detail page: Share icons render, tag badges render

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

Expected: No new lint errors introduced by the migration.
