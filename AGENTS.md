# AGENTS.md — Coding Agent Guidelines

This file provides guidance for AI coding agents working in this repository.

---

## Project Overview

React 19 SPA (despite the `ssg` name) using:
- **Vite 7** as the build tool
- **TanStack Router v1** (file-based routing, auto code-splitting)
- **TanStack Query v5** for data fetching
- **Supabase** as the backend (posts + projects tables)
- **Tailwind CSS v4** for styling (via Vite plugin)
- **shadcn/ui** "new-york" style built on **Radix UI** primitives
- **pnpm** as the package manager

---

## Build, Lint, and Dev Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server
pnpm build         # Type-check + production build (tsc -b && vite build)
pnpm lint          # Run ESLint
pnpm preview       # Preview production build
```

**There are no tests configured.** Do not add a test runner or test files unless explicitly asked.

To type-check only (no emit):
```bash
pnpm exec tsc -b --noEmit
```

---

## File Structure

```
src/
  assets/          # Static images
  components/      # Shared UI components
    ui/            # shadcn/ui primitives — avoid editing; add new ones via shadcn CLI
  hooks/           # Custom React hooks (useQueryHooks.tsx)
  lib/
    types/         # TypeScript interfaces (post.ts, project.ts)
    supabase/      # Supabase client + query functions
      endpoints/   # One subfolder per domain (posts/, projects/)
    utils.ts       # cn() helper
  pages/           # Page-level components (not routes)
  routes/          # TanStack Router file-based routes
    __root.tsx     # Root layout
    index.tsx
    posts/
    projects/
  main.tsx         # App entry point
  index.css        # Tailwind v4 + CSS variable theme
routeTree.gen.ts   # AUTO-GENERATED — never edit manually
```

---

## TypeScript

- **`strict: true`** — all strict checks enabled
- **`verbatimModuleSyntax: true`** — type-only imports **must** use `import type`:
  ```ts
  import type { Post } from "@/lib/types/post"
  ```
- **`erasableSyntaxOnly: true`** — no `enum`, no decorators
- **`noUnusedLocals: true`** and **`noUnusedParameters: true`** — unused vars are compile errors
- **`noUncheckedSideEffectImports: true`** — side-effect imports are checked
- **`noFallthroughCasesInSwitch: true`**
- Target: `ES2022`; module resolution: `bundler`
- Path alias: `@/` maps to `src/`

---

## Import Style

- Use the `@/` path alias for all imports within `src/`:
  ```ts
  import { cn } from "@/lib/utils"
  import type { Project } from "@/lib/types/project"
  ```
- Omit file extensions on imports (no `.ts` / `.tsx`)
- Order: external packages first, then internal `@/` imports
- Use `import type` for type-only imports (enforced by `verbatimModuleSyntax`)

---

## Component Conventions

Prefer **named function declarations** for new components:

```tsx
// Preferred
export function MyComponent({ title }: { title: string }) {
  return <div>{title}</div>
}
```

Arrow function `const` style is acceptable when the existing file uses it:
```tsx
export const MyComponent = ({ title }: { title: string }) => <div>{title}</div>
```

- **Never use `export default`** except for `NotFound` (legacy); prefer named exports
- Route components in `routes/` use `function RouteComponent()` internally, exported via `createFileRoute`
- Page components in `pages/` export named components re-exported with descriptive aliases
- `src/components/ui/` — prefer not modifying; use shadcn CLI to add/upgrade components

---

## Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Components | PascalCase | `ContentCard`, `PostsList` |
| Component files | PascalCase | `ContentCard.tsx` |
| Utility/hook files | camelCase | `utils.ts`, `useQueryHooks.tsx` |
| Route files | lowercase | `index.tsx`, `$postId.tsx` |
| Hooks | `useXxx` | `usePosts`, `useProject` |
| Query functions | `getXxx` | `getPosts`, `getProject` |
| Constants/arrays | camelCase | `navItems`, `workExperience` |
| Boolean props/vars | `isXxx` / `hasXxx` | `isLoading`, `hasError` |

---

## Props and Types

- Inline prop types for simple components:
  ```tsx
  export function CreatorCard({ name, date }: { name: string; date: Date | null }) { ... }
  ```
- Named `interface` for complex prop shapes:
  ```tsx
  interface ContentCardProps {
    title: string
    description: string
    tags: string[]
    href: string
  }
  ```
- Domain model types live in `src/lib/types/` as `interface` declarations
- Prefer `interface` over `type` for object shapes; use `type` for unions/aliases

---

## Error Handling

- **Supabase query functions**: throw `new Error(error.message)` — TanStack Query catches it
- **Route components**: handle all states inline before the happy path:
  ```tsx
  if (isLoading) return <ArticleSkeleton />
  if (error) return <div className="...">Error loading post.</div>
  if (!post) return <div className="...">Post not found.</div>
  return <PostArticle post={post} />
  ```
- **Environment variables**: guard at module init time with a thrown `Error` (see `src/lib/supabase/supabase.ts`)
- Avoid swallowing errors silently; prefer bubbling to TanStack Query's error state

---

## Styling

- **Tailwind CSS v4** — no `tailwind.config.js`; configured entirely via `index.css` and the Vite plugin
- Use `cn()` from `@/lib/utils` to merge class names:
  ```tsx
  import { cn } from "@/lib/utils"
  <div className={cn("base-classes", conditional && "extra-class", className)} />
  ```
- Use `cva` (class-variance-authority) for variant-driven components (Button, Badge pattern)
- Follow mobile-first responsive design: `text-sm md:text-base`
- Theme colors are CSS variables (`oklch`) defined in `index.css` — do not hardcode color values
- shadcn/ui components use `data-slot` attributes — preserve them when editing UI primitives

---

## Routing (TanStack Router)

- Routes are file-based under `src/routes/`
- `routeTree.gen.ts` is **auto-generated** — **never edit it**; the Vite plugin regenerates it on save
- Dynamic route segments use `$param` filename prefix (e.g., `$postId.tsx`)
- Access route params via `useParams` from the route's `createFileRoute` context
- Use `<Link>` from `@tanstack/react-router` for all internal navigation

---

## Data Fetching (TanStack Query)

- All query hooks live in `src/hooks/useQueryHooks.tsx`
- Query functions live in `src/lib/supabase/endpoints/`
- Default `staleTime` is 5 minutes (`5 * 60 * 1000`) on all queries — keep it consistent
- Prefer `useQuery` for reads; do not make raw `fetch` calls inside components
- Query keys must be descriptive arrays: `["posts"]`, `["post", postId]`

---

## Supabase

- Client is initialized once in `src/lib/supabase/supabase.ts`
- Requires env vars: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- All data access goes through functions in `src/lib/supabase/endpoints/`
- Never import the Supabase client directly in components — always use query hooks

---

## ESLint

ESLint 9 flat config (`eslint.config.js`). Active plugins:
- `typescript-eslint` (recommended)
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

Run: `pnpm lint`. Fix all lint errors before committing.

Note: `@tanstack/eslint-plugin-query` is installed but not yet wired into the config.

---

## Git & Commits

- Branch names are lowercase kebab-case, describing the feature: `add-cv-dialog`, `articles-responsive`
- Commit messages use imperative mood, plain sentence: `Add CV dialog component and PDF rendering`
- No conventional commits prefix (`feat:`, `fix:`, etc.) — match the existing log style
- One logical change per commit; keep scope small and reviewable
- Open PRs against `main`; squash-merge is fine for small branches
- Never force-push to `main`

---

## Key Constraints

1. **No Prettier** — be consistent with surrounding code style
2. **No test framework** — do not add test files or test runner config unless asked
3. **No CI/CD** — no GitHub Actions workflows exist
4. **`routeTree.gen.ts`** is auto-generated — never modify it
5. **pnpm only** — do not use `npm` or `yarn`
6. `verbatimModuleSyntax` is enforced — always `import type` for type-only imports
7. No `enum` or decorator syntax (`erasableSyntaxOnly`)
8. Do not hardcode theme colors — use CSS variables from `index.css`
