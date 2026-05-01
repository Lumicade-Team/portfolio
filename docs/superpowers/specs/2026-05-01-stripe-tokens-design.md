# Stripe Design Token Integration

**Date:** 2026-05-01  
**Branch:** feature/stripe-wannabe  
**Source:** `design-extract-output/` (Stripe.com design system extraction)

## Context

The `design-extract-output/` directory contains a full Stripe.com design system extraction (tokens, variables, Tailwind config, motion, shadows). The goal is a subtle refinement — keep the existing dark glassmorphism theme and color system, but adopt Stripe's spacing scale, typography weights, border radius, shadow system, and motion tokens. No color changes. No theme switch.

## Decisions

- **Direction:** Tokens-only (Option C) — dark theme and current MD3 colors unchanged
- **Typography:** All headings (`h1`–`h6`, `font-bold`, `font-extrabold`) → `font-light` (`300`) with `tracking-normal`
- **Approach:** Token-first — add new CSS custom properties to `src/styles/index.css`, then sweep components

## Token Changes — `src/styles/index.css`

### Spacing scale (add to `@theme`)
```css
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
```

### Motion tokens (add to `@theme`)
```css
--duration-xs: 100ms;
--duration-sm: 200ms;
--duration-md: 300ms;
--duration-lg: 500ms;
--duration-xl: 800ms;
--ease-stripe: cubic-bezier(0.45, 0.05, 0.55, 0.95);
--ease-out-stripe: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.6, 0, 0.2, 0.5);
```

### Shadow tokens (add to `@theme`, replace colored glow)
```css
--shadow-stripe-md: rgba(23, 23, 23, 0.06) 0px 3px 6px 0px;
--shadow-stripe-lg: rgba(0, 0, 0, 0.2) 0px 0px 32px 8px;
--shadow-stripe-xl: rgba(0, 0, 0, 0.15) 0px 16px 32px 0px, rgba(0, 0, 0, 0.1) 0px 4px 8px 0px;
```

## Component Class Sweep

### Typography — all components
| Before | After |
|--------|-------|
| `font-extrabold tracking-tighter` | `font-light tracking-normal` |
| `font-bold tracking-tight` | `font-light tracking-normal` |
| `font-bold` (on headings) | `font-light` |

### Border radius — cards
| Before | After |
|--------|-------|
| `rounded-xl` (12px) | `rounded-lg` (8px) |

### Shadows
| Before | After |
|--------|-------|
| `shadow-card` (colored glow) | `shadow-stripe-lg` |
| `shadow-glass` (header) | `shadow-stripe-md` |
| Inline `hover:shadow-[0_0_20px_rgba(...)]` on buttons | `hover:shadow-stripe-md` |

### Motion
| Before | After |
|--------|-------|
| `duration-300` | `duration-md` |
| `duration-500` | `duration-lg` |
| `transition-all duration-300` | `transition-all duration-md ease-out-stripe` |
| `transition-all duration-500` | `transition-all duration-lg ease-smooth` |
| `transition-colors` (bare) | `transition-colors duration-sm ease-out-stripe` |

## Files Modified

1. `src/styles/index.css` — add spacing, motion, shadow tokens
2. `src/components/Hero/index.tsx`
3. `src/components/Header/index.tsx`
4. `src/components/Features/index.tsx`
5. `src/components/About/index.tsx`
6. `src/components/Pricing/index.tsx`
7. `src/components/Testimonials/index.tsx`
8. `src/components/Blog/index.tsx`
9. `src/components/Footer/index.tsx`
10. `src/components/Contact/index.tsx`
11. `src/components/ui/button.tsx`

## Verification

1. `npm run dev` — open homepage, verify:
   - All headings render in light weight (visually thin/elegant)
   - Cards have 8px radius (slightly sharper than before)
   - No colored glow on card hover — neutral elevation shadow instead
   - Header shadow is subtle neutral, not colored
2. `npm run build` — no TypeScript or Tailwind errors
3. `npm run lint` — passes clean
4. Check dark/light theme toggle still works
5. Check mobile responsive layout unchanged
