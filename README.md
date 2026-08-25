# Christian Marín — Portfolio (Blog + Project Showcase)

A modern personal portfolio built with **React + TypeScript** to showcase professional work, projects, and technical writing in one place.

This app combines:

- A clean personal landing page
- A **blog section** powered by Supabase content
- A **project showcase** with dedicated listing routes
- Fast client-side navigation with TanStack Router
- Cached data fetching with TanStack Query
- A polished UI using Tailwind CSS + Radix/shadcn-style primitives

---

## What I Built

### 1) Personal Home Experience

- Intro/profile section with avatar and summary
- Work experience timeline with outbound links
- Featured project highlights
- Quick entry point to Posts and Projects sections

### 2) Blog System

- `/posts` route lists blog entries from Supabase
- `/posts/$postId` route renders an individual article view
- Sorted by newest first (`created_at desc`)
- Loading, empty-state, and error handling included

### 3) Project Showcase

- `/projects` route lists projects from Supabase
- Card-based content previews
- Dedicated project detail route scaffolded at `/projects/$projectId`

### 4) Navigation + UX

- Sticky top navigation for Home / Posts / Projects
- Command menu search (`⌘K` / `Ctrl+K`) for quick page jump
- Footer with social links, contact dialog, language selector, and theme selector
- Responsive layout with a consistent visual style

---

## Tech Stack

### Core

- **React 19**
- **TypeScript 5**
- **Vite 7**

### Routing & Data

- **TanStack Router** (file-based routing)
- **TanStack Query** (server-state caching and query lifecycle)
- **Supabase JS** (content backend for posts/projects)

### UI & Styling

- **Tailwind CSS 4**
- **Radix UI primitives**
- **shadcn/ui-style component architecture**
- **Lucide React** icons
- **next-themes** for dark/light theme behavior

### Forms & Validation

- **react-hook-form**
- **zod**
- **@hookform/resolvers**

### Tooling

- **ESLint 9**
- **TypeScript ESLint**

---

## Project Structure

```bash
src/
	components/         # Reusable UI and feature components
	hooks/              # Query hooks (posts/projects)
	lib/
		supabase/         # Supabase client configuration only
		types/            # Shared domain types
	pages/              # Page-level components
	routes/             # TanStack Router route files
	services/           # Data access layer (queries/mutations)
		analytics/        # Page view tracking
		posts/            # Post queries
		projects/         # Project queries
```

---

## Local Development

### 1) Install dependencies

```bash
pnpm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_or_publishable_key
```

### 3) Run the app

```bash
pnpm dev
```

The app runs in development mode with Vite.

---

## Available Scripts

- `pnpm dev` — start local development server
- `pnpm build` — type-check and build production assets
- `pnpm preview` — preview production build locally
- `pnpm lint` — run lint checks

---

## Deployment

This project includes `vercel.json` and is ready to deploy on **Vercel**.

For production, ensure the same `VITE_SUPABASE_*` environment variables are set in your hosting platform.

---

## Notes

- Data for posts and projects is fetched from Supabase tables.
- Query caching is configured with a 5-minute stale window in custom hooks.
- The codebase is organized to scale content sections cleanly (posts, projects, future additions).

---

## Author

**Christian Marín**

- GitHub: [@dazzae-exe](https://github.com/dazzae-exe)
- LinkedIn: [christianmarindaza](https://www.linkedin.com/in/christianmarindaza)
