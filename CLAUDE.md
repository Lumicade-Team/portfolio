# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumicade Solutions marketing/landing page — a Next.js 15 startup website template built with TypeScript, Tailwind CSS v4, and dark/light theme support via `next-themes`.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint via `next lint`
- `npm start` — serve production build

## Architecture

**Framework:** Next.js 15 App Router (`src/app/`). The root layout (`src/app/layout.tsx`) is a client component that wraps all pages with Header, Footer, ScrollToTop, and a ThemeProvider (dark mode default, class-based toggling).

**Path alias:** `@/*` maps to `./src/*` (configured in `tsconfig.json`).

**Pages:** Each route is a directory under `src/app/` (about, blog, blog-details, blog-sidebar, contact, signin, signup). The homepage (`src/app/page.tsx`) composes all landing sections in order: Hero, Features, Video, Brands, About, Testimonials, Pricing, Blog, Contact.

**Components:** `src/components/` — one directory per section. Each section has an `index.tsx` entry point. Data-driven components keep their data in co-located `*Data.tsx` files (e.g., `featuresData.tsx`, `menuData.tsx`, `blogData.tsx`, `brandsData.tsx`). Shared components live in `src/components/Common/` (Breadcrumb, SectionTitle, ScrollUp).

**Types:** `src/types/` has TypeScript interfaces for domain objects (blog, brand, feature, menu, testimonial).

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. Custom theme tokens (breakpoints, colors) are defined in `src/styles/index.css` using `@theme`. Dark mode uses the `@custom-variant dark` directive with class-based switching. No Tailwind config file — all configuration is in the CSS file.

**Images:** Remote images from `cdn.sanity.io` are allowed in `next.config.js`.
