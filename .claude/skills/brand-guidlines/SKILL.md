---
name: brand-guidelines
description: Applies Lumicade Solutions' official brand colors and typography 
to any artifact. Extracted directly from the official Lumicade logo SVG.
license: Complete terms in LICENSE.txt
---


# Lumicade Solutions Brand Styling


## Overview


Official brand identity for Lumicade Solutions — a software house and 
SaaS provider based in Malaysia.


**Keywords**: branding, Lumicade, visual identity, brand colors, typography,
software house, SaaS, design system


---


## Brand Colors


### Primary Palette (extracted from official logo)


- Deep Navy:    `#142336`  → rgb(20, 35, 54)    — Dark backgrounds, text
- Royal Blue:   `#3352DA`  → rgb(51, 82, 218)   — Primary brand color, CTAs
- Teal Green:   `#229D94`  → rgb(34, 157, 148)  — Secondary accent, highlights


### Extended Palette (derived for UI use)


- Off White:    `#F4F7FF`  — Light backgrounds (complements Royal Blue)
- Light Blue:   `#E8EEFF`  — Subtle hover states, card backgrounds
- Muted Navy:   `#2C4166`  — Secondary text, borders on dark backgrounds
- Soft Teal:    `#D0EEEC`  — Badges, tags, success states


### Semantic Colors


- Success:      `#229D94`  — Reuse Teal Green (on-brand)
- Info:         `#3352DA`  — Reuse Royal Blue
- Warning:      `#F59E0B`  — Amber (neutral, doesn't clash)
- Error:        `#EF4444`  — Red (standard, safe contrast)


### Dark Mode Surfaces


- Background:   `#142336`  — Full deep navy (from logo)
- Surface:      `#1C2E44`  — Slightly lighter navy for cards
- Border:       `#2C4166`  — Muted navy for dividers
- Text Primary: `#F4F7FF`  — Off white on dark
- Text Muted:   `#94A3B8`  — Slate for secondary text


### Light Mode Surfaces


- Background:   `#F4F7FF`  — Off white
- Surface:      `#FFFFFF`  — Pure white cards
- Border:       `#E8EEFF`  — Light blue tint dividers
- Text Primary: `#142336`  — Deep navy on light
- Text Muted:   `#4A6080`  — Muted navy for secondary


---


## Typography


- **Headings**:   Plus Jakarta Sans (fallback: Inter → Arial)
- **Body Text**:  Inter (fallback: system-ui → sans-serif)
- **Code/Mono**:  JetBrains Mono (fallback: Courier New)


### Type Scale


- H1: 48px / bold / Deep Navy or Off White
- H2: 36px / semibold
- H3: 24px / semibold
- Body: 16px / regular / line-height 1.6
- Small/Caption: 13px / medium / letter-spacing 0.04em


---


## Component Tokens


### Buttons


- Primary CTA:   bg `#3352DA`, text `#F4F7FF`, hover darken 10%
- Secondary CTA: border `#3352DA`, text `#3352DA`, hover bg `#E8EEFF`
- Accent CTA:    bg `#229D94`, text `#F4F7FF`, hover darken 10%
- Destructive:   bg `#EF4444`, text white


### Cards


- Background:    `#FFFFFF` (light) / `#1C2E44` (dark)
- Border:        1px solid `#E8EEFF` (light) / `#2C4166` (dark)
- Border Radius: 12px
- Shadow:        `0 4px 24px rgba(51, 82, 218, 0.08)`


### Links


- Default:       `#3352DA`
- Hover:         `#229D94`
- Visited:       `#2C4166`


---


## Tailwind CSS Config Reference


```js
theme: {
  extend: {
    colors: {
      'lumi-navy':      '#142336',
      'lumi-blue':      '#3352DA',
      'lumi-teal':      '#229D94',
      'lumi-offwhite':  '#F4F7FF',
      'lumi-lightblue': '#E8EEFF',
      'lumi-mutednav':  '#2C4166',
    },
    fontFamily: {
      heading: ['Plus Jakarta Sans', 'Inter', 'Arial', 'sans-serif'],
      body:    ['Inter', 'system-ui', 'sans-serif'],
      mono:    ['JetBrains Mono', 'Courier New', 'monospace'],
    },
    borderRadius: {
      card:   '12px',
      btn:    '8px',
      input:  '6px',
    },
  }
}
