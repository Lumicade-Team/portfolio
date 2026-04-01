# Shadcn UI + Phosphor Icons Migration

## Goal

Replace hardcoded UI components with Shadcn UI equivalents and swap all inline SVG icons for Phosphor Icons (`@phosphor-icons/react`). Decorative SVG patterns (hero globe, gradient orbs, wave shapes) remain untouched.

## Setup

1. Run `npx shadcn@latest init` configured for:
   - `src/` directory structure
   - `@/` path alias (already in tsconfig)
   - CSS file: `src/styles/index.css`
   - Components output: `src/components/ui/`
   - Utility: `src/lib/utils.ts` (`cn()` from `clsx` + `tailwind-merge`)
2. Install `@phosphor-icons/react`
3. Remove Material Symbols Outlined font import from `src/styles/index.css` and its base layer config

## Migration Order

### Phase 1 — High Priority (Interactive Components)

These replace complex custom state management with accessible Radix-based primitives.

#### 1.1 FaqAccordion → Shadcn Accordion
- **File:** `src/components/Pricing/FaqAccordion.tsx`
- **Add:** `npx shadcn@latest add accordion`
- **Changes:** Replace custom open/close state + SVG +/- icons with `<Accordion>`, `<AccordionItem>`, `<AccordionTrigger>`, `<AccordionContent>`
- **Gains:** Built-in animation, keyboard navigation, ARIA attributes, chevron icon

#### 1.2 video-modal → Shadcn Dialog
- **File:** `src/components/video-modal.tsx`
- **Add:** `npx shadcn@latest add dialog`
- **Changes:** Replace custom overlay + portal + close button with `<Dialog>`, `<DialogContent>`, `<DialogTrigger>`, `<DialogClose>`
- **Gains:** Focus trap, ESC to close, scroll lock, accessibility

#### 1.3 Header Mobile Menu → Shadcn Sheet
- **File:** `src/components/Header/index.tsx`
- **Add:** `npx shadcn@latest add sheet`
- **Changes:** Replace mobile dropdown menu (hamburger toggle + conditional rendering) with `<Sheet side="right">`, `<SheetTrigger>`, `<SheetContent>`
- **Gains:** Slide-out animation, overlay backdrop, focus management
- **Keep:** Desktop navigation unchanged (simple link list, no need for NavigationMenu component)

### Phase 2 — Medium Priority (Buttons, Cards, Badges, Avatars)

#### 2.1 Buttons
- **Add:** `npx shadcn@latest add button`
- **Files affected:**
  - `src/components/Hero/index.tsx` — CTA buttons
  - `src/components/Pricing/PricingBox.tsx` — "Choose Plan" button
  - `src/components/Contact/index.tsx` — "Start a Project" CTA
  - `src/components/Header/index.tsx` — "Get Started" CTA
  - `src/components/ScrollToTop/index.tsx` — scroll button
  - `src/components/Header/ThemeToggler.tsx` — theme toggle button
- **Approach:** Create a custom variant in the Button component for the gradient style used across the site, keep the default variant for secondary actions

#### 2.2 Cards
- **Add:** `npx shadcn@latest add card`
- **Files affected:**
  - `src/components/Pricing/PricingBox.tsx` — pricing card wrapper
  - `src/components/Features/SingleFeature.tsx` — feature card wrapper
  - `src/components/Blog/SingleBlog.tsx` — blog card wrapper
  - `src/components/Testimonials/SingleTestimonial.tsx` — testimonial card wrapper
- **Approach:** Use `<Card>`, `<CardHeader>`, `<CardContent>` as structural wrappers, apply existing custom styling via className overrides

#### 2.3 Badges
- **Add:** `npx shadcn@latest add badge`
- **Files affected:**
  - `src/components/Blog/SingleBlog.tsx` — category tag
  - `src/components/Blog/TagButton.tsx` — tag buttons
- **Approach:** Replace inline styled spans with `<Badge>` component

#### 2.4 Avatars
- **Add:** `npx shadcn@latest add avatar`
- **Files affected:**
  - `src/components/Blog/SingleBlog.tsx` — author avatar
  - `src/components/Testimonials/SingleTestimonial.tsx` — testimonial author avatar
- **Approach:** Wrap existing `<Image>` in `<Avatar>`, `<AvatarImage>`, `<AvatarFallback>`

### Phase 3 — Low Priority (Icon Replacement)

Replace all inline SVG icons with Phosphor equivalents from `@phosphor-icons/react`.

#### Icon Mapping

| File | Current Icon | Phosphor Replacement |
|------|-------------|---------------------|
| `Header/ThemeToggler.tsx` | Inline SVG sun/moon | `<Sun>`, `<Moon>` |
| `ScrollToTop/index.tsx` | CSS border arrow | `<CaretUp>` |
| `Pricing/OfferList.tsx` | Inline SVG check/cross | `<Check>`, `<X>` |
| `Pricing/PricingCard.tsx` | Inline SVG check | `<Check>` |
| `Blog/SharePost.tsx` | Inline SVG social icons | `<LinkedinLogo>`, `<XLogo>`, `<FacebookLogo>` |
| `Testimonials/SingleTestimonial.tsx` | Inline SVG star | `<Star weight="fill">` |
| `About/TechStackCTA.tsx` | Inline SVG arrow | `<ArrowRight>` |
| `Blog/index.tsx` | Inline SVG placeholder + arrow | `<ImageSquare>`, `<ArrowRight>` |
| `Header/index.tsx` | Material Symbols hamburger | `<List>` (hamburger menu icon) |

#### Data File Icon Mapping

| File | Icons | Phosphor Replacements |
|------|-------|----------------------|
| `Features/featuresData.tsx` | 6 inline SVGs | `<Globe>`, `<Desktop>`, `<UserGear>`, `<DeviceMobile>`, `<Cloud>`, `<PaintBrush>` |
| `About/aboutData.tsx` | 4 inline SVGs | `<Code>`, `<Devices>`, `<Brain>`, `<FileText>` |

#### Cleanup
- Remove Material Symbols font import from `src/styles/index.css` (line 1)
- Remove `.material-symbols-outlined` base style (lines 179-181)

## What Stays Unchanged

- **Footer layout** — links and columns, no UI primitives to replace
- **Decorative SVGs** — `HeroDecorations.tsx`, `TestimonialDecorations.tsx`, `Breadcrumb.tsx` gradient shapes, `AboutSectionOne.tsx` grid pattern, `WhyCards.tsx` grid pattern, `PricingBox.tsx` gradient shapes, `NewsLatterBox.tsx` decorative gradients, Hero binary globe pattern
- **Data file structure** — `*Data.tsx` files keep their shape, only icon JSX changes
- **Theme system** — `next-themes` dark/light toggle, all color tokens in `src/styles/index.css`
- **Fonts** — Manrope + Inter remain
- **Desktop navigation** — simple link list, no NavigationMenu needed

## Dependencies Added

- `@phosphor-icons/react`
- `clsx` (via Shadcn init)
- `tailwind-merge` (via Shadcn init)
- `@radix-ui/react-accordion` (via accordion component)
- `@radix-ui/react-dialog` (via dialog + sheet components)
- `class-variance-authority` (via Shadcn init)
