# Lumicade — Next.js Starter Template

Minimal README for the Lumicade Next.js project in this workspace.

## What this repo contains

- A Next.js 15 (App Router) TypeScript template with Tailwind CSS v4.
- Landing pages, blog pages, contact form, and small admin routes.
- Supabase integration (browser anon client and optional server client).

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Add `.env.local` (see Environment below).

3. Start dev server:

```bash
npm run dev
```

4. Build & run production:

```bash
npm run build
npm start
```

## Environment variables

Add a `.env.local` file at the project root. Common variables used here:

- `NEXT_PUBLIC_SUPABASE_URL` — required to enable Supabase features
- `SUPABASE_SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY` — optional privileged server key
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public anon key (fallback)
- `GMAIL_USER`, `GMAIL_APP_PASSWORD` — used by contact email alerts
- `CONTACT_ALERT_TO` — recipient for contact form notifications
- `ADMIN_SESSION_SECRET` — secret for minimal admin session handling

Notes:
- The server client falls back to the anon key when a privileged key is not present. If using the anon key, Supabase Row Level Security (RLS) may block inserts. Either provide a privileged key or create appropriate RLS policies.

## Key files

- `src/app/api/contact/route.ts` — contact handler (stores message and sends email)
- `src/lib/supabase.ts` — browser/anon Supabase client
- `src/lib/supabaseServer.ts` — lazy server client (uses service/secret key or anon fallback)

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — start production server
- `npm run lint` — run ESLint

## Troubleshooting

- `/api/contact` may return 500 if both DB write and email sending fail. Check `.env.local` and RLS policies.
- Warnings about `<img>` are informational from Next.js; convert to `next/image` if desired.

## License

See the `LICENSE` file in this repository.

---

Want more? I can add `CONTRIBUTING.md`, a health-check endpoint, or expand environment examples. Reply with what you'd like next.
