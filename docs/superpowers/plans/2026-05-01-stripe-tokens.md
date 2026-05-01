# Stripe Token Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply Stripe's spacing, motion, shadow, radius, and typography tokens to the existing dark-themed site without changing colors or switching themes.

**Architecture:** Add new CSS custom properties to `src/styles/index.css` (@theme block), then sweep all components replacing hardcoded `font-bold`/`font-extrabold` with `font-light`, `rounded-xl` with `rounded-lg`, `shadow-card`/`shadow-glass` with new Stripe shadow tokens, and `duration-300`/`duration-500` with named motion token classes.

**Tech Stack:** Next.js 15, Tailwind CSS v4 (@theme tokens), TypeScript

---

## File Map

| File | Change |
|------|--------|
| `src/styles/index.css` | Add spacing, motion, shadow tokens to `@theme` |
| `src/components/Hero/index.tsx` | Typography: extrabold → light |
| `src/components/Contact/index.tsx` | Typography: extrabold → light |
| `src/components/About/AboutSectionOne.tsx` | Typography: extrabold → light, radius, motion |
| `src/components/Features/index.tsx` | Typography, radius, shadow, motion |
| `src/components/Products/index.tsx` | Typography, radius, motion |
| `src/components/Process/index.tsx` | Typography, radius, motion |
| `src/components/Testimonials/index.tsx` | Typography, radius, shadow, motion |
| `src/components/Common/SectionTitle.tsx` | Typography: bold → light |
| `src/components/Pricing/PricingCard.tsx` | Typography, radius, shadow |
| `src/components/Footer/index.tsx` | Typography, motion |
| `src/components/ui/button.tsx` | Typography, shadow, motion |
| `src/components/Header/index.tsx` | Shadow, motion |
| `src/components/Blog/index.tsx` | Radius, shadow, motion |

---

## Task 1: Add tokens to index.css

**Files:**
- Modify: `src/styles/index.css`

- [ ] **Step 1: Add spacing, motion, and shadow tokens to `@theme`**

In `src/styles/index.css`, insert after the `--drop-shadow-three` line (line 107) and before the `/* Fonts */` comment:

```css
  /* Stripe spacing scale */
  --spacing-s14: 28px;
  --spacing-s16: 32px;
  --spacing-s20: 40px;
  --spacing-s24: 48px;
  --spacing-s26: 52px;
  --spacing-s30: 60px;
  --spacing-s32: 64px;
  --spacing-s36: 72px;
  --spacing-s40: 80px;
  --spacing-s48: 96px;

  /* Stripe motion tokens */
  --transition-duration-xs: 100ms;
  --transition-duration-sm: 200ms;
  --transition-duration-md: 300ms;
  --transition-duration-lg: 500ms;
  --transition-duration-xl: 800ms;
  --transition-timing-function-stripe: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --transition-timing-function-out-stripe: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-timing-function-smooth: cubic-bezier(0.6, 0, 0.2, 0.5);

  /* Stripe shadow tokens (neutral elevation, replaces colored glow) */
  --shadow-stripe-md: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;
  --shadow-stripe-lg: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
  --shadow-stripe-xl: rgba(0, 0, 0, 0.15) 0px 16px 32px 0px, rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
```

- [ ] **Step 2: Verify tokens compile**

Run: `npm run build 2>&1 | head -20`

Expected: no errors about unknown CSS properties.

- [ ] **Step 3: Commit**

```bash
git add src/styles/index.css
git commit -m "feat: add Stripe spacing, motion, and shadow tokens to @theme"
```

---

## Task 2: Typography sweep — Hero + Contact + AboutSectionOne

**Files:**
- Modify: `src/components/Hero/index.tsx`
- Modify: `src/components/Contact/index.tsx`
- Modify: `src/components/About/AboutSectionOne.tsx`

- [ ] **Step 1: Update Hero h1**

In `src/components/Hero/index.tsx`, change line 56:

```tsx
// Before
<h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">

// After
<h1 className="font-headline text-5xl md:text-8xl font-light tracking-normal text-on-surface mb-8 leading-[0.9]">
```

- [ ] **Step 2: Update Hero "Let's Talk" button link**

In `src/components/Hero/index.tsx`, change line 75:

```tsx
// Before
className="w-full md:w-auto px-10 py-4 border-outline-variant/30 text-on-surface font-headline text-base font-extrabold uppercase hover:bg-white/5"

// After
className="w-full md:w-auto px-10 py-4 border-outline-variant/30 text-on-surface font-headline text-base font-light uppercase hover:bg-white/5"
```

- [ ] **Step 3: Update Contact h2**

In `src/components/Contact/index.tsx`, change line 12:

```tsx
// Before
<h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">

// After
<h2 className="font-headline text-5xl md:text-7xl font-light tracking-normal mb-8">
```

- [ ] **Step 4: Update AboutSectionOne h1**

In `src/components/About/AboutSectionOne.tsx`, change line 36:

```tsx
// Before
<h1 className="mb-8 text-4xl font-extrabold leading-[1.1] text-lumi-offwhite sm:text-5xl md:text-[52px]">

// After
<h1 className="mb-8 text-4xl font-light leading-[1.1] text-lumi-offwhite sm:text-5xl md:text-[52px]">
```

- [ ] **Step 5: Update AboutSectionOne stat values**

In `src/components/About/AboutSectionOne.tsx`, change line 65:

```tsx
// Before
<p className={`mb-1 text-3xl font-extrabold tracking-tight ${

// After
<p className={`mb-1 text-3xl font-light tracking-normal ${
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero/index.tsx src/components/Contact/index.tsx src/components/About/AboutSectionOne.tsx
git commit -m "feat: update extrabold headings to font-light (Hero, Contact, About)"
```

---

## Task 3: Typography sweep — Features + Products + Process

**Files:**
- Modify: `src/components/Features/index.tsx`
- Modify: `src/components/Products/index.tsx`
- Modify: `src/components/Process/index.tsx`

- [ ] **Step 1: Update Features headings**

In `src/components/Features/index.tsx`:

Line 11 — section h2:
```tsx
// Before
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">

// After
<h2 className="font-headline text-4xl md:text-6xl font-light tracking-normal mb-6">
```

Lines 27, 41, 55 — three card h3s (all identical pattern):
```tsx
// Before
<h3 className="font-headline text-2xl font-bold mb-4">

// After
<h3 className="font-headline text-2xl font-light mb-4">
```

- [ ] **Step 2: Update Products headings**

In `src/components/Products/index.tsx`:

Line 14 — section h2:
```tsx
// Before
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">

// After
<h2 className="font-headline text-4xl md:text-6xl font-light tracking-normal">
```

Lines 31, 53, 93 — three product h3s:
```tsx
// Before
<h3 className="font-headline text-3xl md:text-4xl font-bold mb-6">

// After
<h3 className="font-headline text-3xl md:text-4xl font-light mb-6">
```

- [ ] **Step 3: Update Process headings**

In `src/components/Process/index.tsx`:

Line 6 — section h2:
```tsx
// Before
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">

// After
<h2 className="font-headline text-4xl md:text-6xl font-light tracking-normal mb-6">
```

Lines 22, 32, 42, 52 — four step h4s (all identical pattern):
```tsx
// Before
<h4 className="font-headline text-xl font-bold mb-3">

// After
<h4 className="font-headline text-xl font-light mb-3">
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Features/index.tsx src/components/Products/index.tsx src/components/Process/index.tsx
git commit -m "feat: update section and card headings to font-light (Features, Products, Process)"
```

---

## Task 4: Typography sweep — Testimonials + SectionTitle + PricingCard + Footer + button.tsx

**Files:**
- Modify: `src/components/Testimonials/index.tsx`
- Modify: `src/components/Common/SectionTitle.tsx`
- Modify: `src/components/Pricing/PricingCard.tsx`
- Modify: `src/components/Footer/index.tsx`
- Modify: `src/components/ui/button.tsx`

- [ ] **Step 1: Update Testimonials headings**

In `src/components/Testimonials/index.tsx`:

Line 11 — section h2:
```tsx
// Before
<h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-8">

// After
<h2 className="font-headline text-4xl md:text-6xl font-light tracking-normal mb-8">
```

Line 46 — reviewer name h5:
```tsx
// Before
<h5 className="font-headline font-bold text-on-surface">

// After
<h5 className="font-headline font-light text-on-surface">
```

- [ ] **Step 2: Update SectionTitle h2**

In `src/components/Common/SectionTitle.tsx`, change line 20:

```tsx
// Before
<h2 className="mb-4 text-3xl font-bold leading-tight! text-lumi-gray dark:text-lumi-offwhite sm:text-4xl md:text-[45px]">

// After
<h2 className="mb-4 text-3xl font-light leading-tight! text-lumi-gray dark:text-lumi-offwhite sm:text-4xl md:text-[45px]">
```

- [ ] **Step 3: Update PricingCard h3**

In `src/components/Pricing/PricingCard.tsx`, change line 22:

```tsx
// Before
<h3 className="mb-2 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">

// After
<h3 className="mb-2 text-2xl font-light text-lumi-navy dark:text-lumi-offwhite">
```

- [ ] **Step 4: Update Footer headings**

In `src/components/Footer/index.tsx`:

Line 9 — brand title:
```tsx
// Before
<div className="text-lg font-headline font-bold text-on-surface mb-6 uppercase">

// After
<div className="text-lg font-headline font-light text-on-surface mb-6 uppercase">
```

Lines 19, 59, 91 — three column h4s (all identical pattern):
```tsx
// Before
<h4 className="text-on-surface font-bold text-sm uppercase mb-6 tracking-widest">

// After
<h4 className="text-on-surface font-light text-sm uppercase mb-6 tracking-widest">
```

- [ ] **Step 5: Update button.tsx gradient variant**

In `src/components/ui/button.tsx`, change line 22:

```tsx
// Before
gradient:
  "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-bold uppercase hover:shadow-[0_0_20px_rgba(151,169,255,0.3)] active:scale-95 transition-all duration-300",

// After
gradient:
  "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-light uppercase hover:shadow-stripe-md active:scale-95 transition-all duration-md ease-out-stripe",
```

- [ ] **Step 6: Commit**

```bash
git add src/components/Testimonials/index.tsx src/components/Common/SectionTitle.tsx src/components/Pricing/PricingCard.tsx src/components/Footer/index.tsx src/components/ui/button.tsx
git commit -m "feat: update remaining headings to font-light, update button shadow and motion"
```

---

## Task 5: Shadow swap — Header + PricingCard + Blog

**Files:**
- Modify: `src/components/Header/index.tsx`
- Modify: `src/components/Pricing/PricingCard.tsx`
- Modify: `src/components/Blog/index.tsx`

- [ ] **Step 1: Update Header shadow**

In `src/components/Header/index.tsx`, change line 86:

```tsx
// Before
<header className="fixed top-0 w-full z-50 bg-surface-container-high/60 backdrop-blur-xl shadow-glass">

// After
<header className="fixed top-0 w-full z-50 bg-surface-container-high/60 backdrop-blur-xl shadow-stripe-md">
```

- [ ] **Step 2: Update PricingCard shadow**

In `src/components/Pricing/PricingCard.tsx`, change line 21:

```tsx
// Before
<div key={card.title} className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">

// After
<div key={card.title} className="rounded-lg bg-white p-10 shadow-stripe-lg dark:bg-dark">
```

- [ ] **Step 3: Update Blog card shadow and radius**

In `src/components/Blog/index.tsx`, change line 31:

```tsx
// Before
className="group flex h-full flex-col overflow-hidden rounded-xl border border-lumi-lightblue bg-white shadow-card transition-all duration-300 hover:border-primary hover:shadow-feature-2 dark:border-lumi-mutednav dark:bg-dark dark:hover:border-primary"

// After
className="group flex h-full flex-col overflow-hidden rounded-lg border border-lumi-lightblue bg-white shadow-stripe-lg transition-all duration-md ease-out-stripe hover:border-primary dark:border-lumi-mutednav dark:bg-dark dark:hover:border-primary"
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Header/index.tsx src/components/Pricing/PricingCard.tsx src/components/Blog/index.tsx
git commit -m "feat: replace shadow-glass/shadow-card with Stripe neutral elevation shadows"
```

---

## Task 6: Border radius sweep — Features + Process + Testimonials + About stats

**Files:**
- Modify: `src/components/Features/index.tsx`
- Modify: `src/components/Process/index.tsx`
- Modify: `src/components/Testimonials/index.tsx`
- Modify: `src/components/About/AboutSectionOne.tsx`

- [ ] **Step 1: Update Features card radius**

In `src/components/Features/index.tsx`, there are 3 cards. All have `rounded-xl`. Change all three occurrences (lines 23, 37, 51):

```tsx
// Before (3 identical cards)
<div className="group p-10 rounded-xl bg-surface-container-high/40 backdrop-blur-md glass-glow border border-outline-variant/10 hover:bg-surface-container-highest/60 transition-all duration-500">

// After (3 identical cards)
<div className="group p-10 rounded-lg bg-surface-container-high/40 backdrop-blur-md glass-glow border border-outline-variant/10 hover:bg-surface-container-highest/60 transition-all duration-500">
```

- [ ] **Step 2: Update Process card radius**

In `src/components/Process/index.tsx`, there are 4 step cards. All have `rounded-xl`. Change all four occurrences (lines 18, 30, 42, 54):

```tsx
// Before (4 identical step cards)
<div className="relative bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">

// After (4 identical step cards)
<div className="relative bg-surface-container-high p-8 rounded-lg border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300">
```

- [ ] **Step 3: Update Testimonials card radius**

In `src/components/Testimonials/index.tsx`, change line 30:

```tsx
// Before
<div className="bg-surface-container-high p-10 rounded-xl glass-glow border border-outline-variant/10">

// After
<div className="bg-surface-container-high p-10 rounded-lg glass-glow border border-outline-variant/10">
```

- [ ] **Step 4: Update About stats card radius**

In `src/components/About/AboutSectionOne.tsx`, change line 59:

```tsx
// Before
className={`rounded-2xl border p-7 transition-all duration-300 hover:border-primary/40 ${

// After
className={`rounded-lg border p-7 transition-all duration-300 hover:border-primary/40 ${
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Features/index.tsx src/components/Process/index.tsx src/components/Testimonials/index.tsx src/components/About/AboutSectionOne.tsx
git commit -m "feat: reduce card border radius from xl/2xl to lg (8px) across components"
```

---

## Task 7: Motion tokens sweep

**Files:**
- Modify: `src/components/Features/index.tsx`
- Modify: `src/components/Products/index.tsx`
- Modify: `src/components/Process/index.tsx`
- Modify: `src/components/Testimonials/index.tsx`
- Modify: `src/components/Header/index.tsx`
- Modify: `src/components/Footer/index.tsx`
- Modify: `src/components/Blog/index.tsx`
- Modify: `src/components/About/AboutSectionOne.tsx`

- [ ] **Step 1: Update Features motion**

In `src/components/Features/index.tsx`:

Three card `transition-all duration-500` (lines 23, 37, 51):
```tsx
// Before
hover:bg-surface-container-highest/60 transition-all duration-500">

// After
hover:bg-surface-container-highest/60 transition-all duration-lg ease-smooth">
```

Three icon container `transition-colors` (lines 24, 38, 52):
```tsx
// Before
group-hover:bg-primary/20 transition-colors">
group-hover:bg-tertiary/20 transition-colors">
group-hover:bg-secondary/20 transition-colors">

// After (each respective)
group-hover:bg-primary/20 transition-colors duration-sm ease-out-stripe">
group-hover:bg-tertiary/20 transition-colors duration-sm ease-out-stripe">
group-hover:bg-secondary/20 transition-colors duration-sm ease-out-stripe">
```

- [ ] **Step 2: Update Products motion**

In `src/components/Products/index.tsx`:

Three image containers `transition-transform duration-700` (lines 27, 73, 87):
```tsx
// Before
group-hover:scale-105 transition-transform duration-700 w-full"

// After
group-hover:scale-105 transition-transform duration-xl ease-smooth w-full"
```

Three "Learn More" links `transition-all duration-300` (lines 41, 63, 107):
```tsx
// Before
className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"

// After
className="inline-flex items-center gap-2 text-primary font-light hover:gap-4 transition-all duration-md ease-out-stripe"
```

Note: also update `font-bold` → `font-light` on these links as part of this step (typography was missed in Task 3).

- [ ] **Step 3: Update Process motion**

In `src/components/Process/index.tsx`:

Four step cards `transition-all duration-300` (lines 18, 30, 42, 54):
```tsx
// Before
group hover:-translate-y-2 transition-all duration-300">

// After
group hover:-translate-y-2 transition-all duration-md ease-out-stripe">
```

Four step number divs `transition-colors` (lines 19, 31, 43, 55):
```tsx
// Before (each number div ends with) transition-colors">

// After
transition-colors duration-sm ease-out-stripe">
```

- [ ] **Step 4: Update Testimonials motion**

In `src/components/Testimonials/index.tsx`:

Two nav buttons `transition-colors` (lines 20, 23):
```tsx
// Before
hover:bg-white/5 transition-colors">

// After
hover:bg-white/5 transition-colors duration-sm ease-out-stripe">
```

- [ ] **Step 5: Update Header motion**

In `src/components/Header/index.tsx`:

Desktop CTA link `transition-transform` (line 122):
```tsx
// Before
active:scale-90 transition-transform"

// After
active:scale-90 transition-transform duration-sm ease-out-stripe"
```

Mobile CTA link `transition-transform` (line 163):
```tsx
// Before
active:scale-90 transition-transform"

// After
active:scale-90 transition-transform duration-sm ease-out-stripe"
```

Desktop + mobile nav links `transition-colors` (lines 105, 148):
```tsx
// Before
uppercase transition-colors ${

// After
uppercase transition-colors duration-sm ease-out-stripe ${
```

- [ ] **Step 6: Update Footer motion**

In `src/components/Footer/index.tsx`:

All nav/social links use `transition-colors` (10 occurrences: 4 nav + 3 legal + 3 social). Change all:
```tsx
// Before
hover:text-primary transition-colors"

// After
hover:text-primary transition-colors duration-sm ease-out-stripe"
```

Footer copyright `transition-all` (line 130):
```tsx
// Before
opacity-80 hover:opacity-100 transition-all"

// After
opacity-80 hover:opacity-100 transition-all duration-sm ease-out-stripe"
```

- [ ] **Step 7: Update Blog image motion**

In `src/components/Blog/index.tsx`, change line 37:

```tsx
// Before
className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

// After
className="h-full w-full object-cover transition-transform duration-lg ease-smooth group-hover:scale-105"
```

- [ ] **Step 8: Update About stats motion**

In `src/components/About/AboutSectionOne.tsx`, change line 59 (the stat card className — duration-300 was left after Task 6):

```tsx
// Before
className={`rounded-lg border p-7 transition-all duration-300 hover:border-primary/40 ${

// After
className={`rounded-lg border p-7 transition-all duration-md ease-out-stripe hover:border-primary/40 ${
```

- [ ] **Step 9: Commit**

```bash
git add src/components/Features/index.tsx src/components/Products/index.tsx src/components/Process/index.tsx src/components/Testimonials/index.tsx src/components/Header/index.tsx src/components/Footer/index.tsx src/components/Blog/index.tsx src/components/About/AboutSectionOne.tsx
git commit -m "feat: replace duration-300/500/700 with named Stripe motion tokens and easing"
```

---

## Task 8: Build verification

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

Expected: no errors (warnings about `any` types are acceptable).

- [ ] **Step 2: Run build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no type errors.

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- Hero h1 is thin/light weight — not bold
- Contact section h2 is thin/light weight
- Features/Products/Process/Testimonials section headings are light weight
- Feature cards have slightly sharper corners (8px vs 12px)
- Header shadow is subtler (no blue tint)
- Pricing cards have neutral shadow (no blue glow)
- Blog cards have neutral shadow
- No colored hover shadow on gradient buttons (hover shows `shadow-stripe-md` — neutral)
- Dark/light theme toggle still works
- Mobile responsive layout unchanged (check at 375px width)

- [ ] **Step 4: Final commit if any fixes needed**

If any visual issues found, fix and commit:
```bash
git add -p
git commit -m "fix: correct token sweep edge cases found in visual review"
```
