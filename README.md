# Christian Marín — Portfolio

[![.github/workflows/ci.yml](https://github.com/Dazzae-exe/christianmarin.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/Dazzae-exe/christianmarin.dev/actions/workflows/ci.yml)

My personal portfolio: a minimalist, editorial site built with **React 19 + TypeScript**. It is a client-only SPA (not SSG, despite the repo name) deployed on Vercel, with project content served from Supabase.

---

## Features

### Home

- Hero intro on first load: the headline starts full-screen, scrambles in as ASCII and glides into place with a View Transition
- Short bio with avatar

### Projects

- `/projects` lists projects from Supabase
- Video preview that follows the pointer when hovering a project card
- `/projects/$projectId` renders a project article (the param is the project **slug**)
- ASCII 404 page

### Navigation and UX

- Sticky aside on desktop, a floating bottom dock on mobile (no top navbar, no footer)
- Command menu (`⌘K` / `Ctrl+K`) to jump between pages
- Hover peeks in the aside (macOS folder for Projects, ASCII cloud for Home, GitHub graph, LinkedIn, Search, Theme)
- Light / dark / system theme that follows OS changes
- Contact through a `mailto:` link
- Staggered blur-in page entrances and scroll reveals, disabled under `prefers-reduced-motion`
- Anonymous page-view analytics through a Supabase RPC

---

## Tech Stack

- **React 19**, **TypeScript 5**, **Vite 7**
- **TanStack Router** (file-based routing, automatic code splitting)
- **TanStack Query** (server-state caching)
- **Supabase** via `@supabase/postgrest-js`
- **Tailwind CSS 4** + **shadcn/ui** (Radix primitives, Lucide icons)
- **DM Sans Variable** as the only typeface
- **ESLint 9** + TypeScript ESLint

---

## Project Structure

```bash
src/
  assets/             # Images, videos and design references
  components/         # Feature components
    shell/            # AppShell, SiteAside, MobileDock, command menu, hover peeks
    ui/               # shadcn/ui primitives
  hooks/              # TanStack Query hooks and page-view tracking
  lib/
    data/             # Navigation, social links and static content
    supabase/         # Supabase client
    types/            # Shared domain types
  pages/              # Page-level components
  routes/             # TanStack Router route files
  services/           # Data access layer
    analytics/        # Page-view tracking (track_view RPC)
    projects/         # Project queries
```

`src/routeTree.gen.ts` is generated on dev/build; don't edit it by hand.

---

## Local Development

Requires **Node 24** and **pnpm**.

```bash
pnpm install
```

Create `.env.local` (or `.env`) in the project root. The app won't boot without these:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

```bash
pnpm dev
```

### Scripts

- `pnpm dev`: start the Vite dev server
- `pnpm build`: type-check (`tsc -b`) and build for production
- `pnpm preview`: serve the production build
- `pnpm lint`: run ESLint

---

## CI and Deployment

GitHub Actions (`.github/workflows/ci.yml`) runs install → lint → build on pushes to `main` and when a pull request is opened or reopened.

The site deploys on **Vercel**. `vercel.json` rewrites every path to `index.html` and caches `/assets/*` immutably. Set the same `VITE_SUPABASE_*` variables in the Vercel project.

---

## Author

**Christian Marín**

- GitHub: [@dazzae-exe](https://github.com/dazzae-exe)
- LinkedIn: [christianmarindaza](https://www.linkedin.com/in/christianmarindaza)
