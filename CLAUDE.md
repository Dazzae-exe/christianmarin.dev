# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (CI uses pnpm 11 and Node 24).

- `pnpm dev`: start the Vite dev server
- `pnpm build`: type-check (`tsc -b`) and then `vite build`. This is the only type-check step.
- `pnpm lint`: ESLint over the whole repo
- `pnpm preview`: serve the production build

There is **no test framework** and there are no tests. CI (`.github/workflows/ci.yml`) runs install → lint → build as chained jobs, using the composite action `.github/actions/pnpm-setup`. The `test*.yml` workflows are GitHub Actions practice files and don't check the app.

The app needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env.local` (or `.env`). `src/lib/supabase/supabase.ts` throws **when it is imported** if either is missing, so the whole app fails to boot without them.

## Architecture

Despite the repo name, this is **not SSG**. It is a client-only React 19 SPA built with Vite and deployed to Vercel. `vercel.json` rewrites every path to `index.html`.

**Routing:** TanStack Router with file-based routes in `src/routes/`. The Vite plugin (`autoCodeSplitting: true`) generates `src/routeTree.gen.ts`. Never edit that file by hand; it regenerates on dev/build. `__root.tsx` wraps the `Outlet` in `AppShell` and calls `useTrackPageView()` on every navigation.

**App shell** (`src/components/shell/`): `AppShell` is a two-column grid. On the left is the sticky `SiteAside` (desktop only). On the right is `<main>`. On mobile, `MobileDock` (a floating bottom pill) replaces the aside. There is no top navbar and no footer. Nav links and social links are defined **once** in `src/lib/data/navigation.ts`, and the aside, the dock, and the ⌘K menu all read from it. `CommandMenuProvider` owns the single instances of `SearchCommand` (⌘K), `ContactDialog`, and `DialogCV`, plus the ⌘K keyboard shortcut. Open any of them from anywhere with `useCommandMenu()` (`openSearch`, `openContact`, `openCV`). Those dialogs are controlled components with no trigger of their own.

**Data flow** has three layers. Keep new content types in the same shape:

1. `src/services/<domain>/*Query.ts`: plain async functions that call Supabase and throw `Error` on failure.
2. `src/hooks/useQueryHooks.tsx`: TanStack Query wrappers (5-minute `staleTime`). Global QueryClient defaults in `main.tsx` are `retry: 1` and `refetchOnWindowFocus: false`.
3. Route components call the hooks and handle the loading (skeleton), error, and not-found states inline, using `StatusMessage` for error and empty states. `PostsList` and `ProjectsList` map their rows into the shared `ContentListPage`.

**Supabase content model:**

- `posts` are fetched by **`id` (UUID)**: `/posts/$postId`.
- `projects` are fetched by **`slug`**: `/projects/$projectId` (the param is a slug despite its name).
- `post.content` and `project.content` are **raw HTML**, rendered with `dangerouslySetInnerHTML` in the shared `Article.tsx`. `PostArticle` and `ProjectArticle` are thin wrappers around it. Styling comes from the `.article-prose` class in `src/index.css`, not from a markdown renderer.

**Analytics** (`src/services/analytics/analyticsMutation.ts`): each pathname change calls the `track_view` Supabase RPC. It resolves the resource from the URL: a UUID post id becomes a `post`, a project slug is looked up to its `id` for `project`, and anything else is a `page`. It also sends a visitor UUID persisted in localStorage. If post or project URL schemes change (for example, posts moving to slugs), update `resolveResource` to match.

**Static vs. remote content:** the home page (`src/pages/Index.tsx`) currently shows only the intro (avatar, headline, CV button, bio) and has no Supabase data. `src/lib/data/homeData.ts` (work history, featured projects) and `WorkItem.tsx` are kept for later but are not rendered. Watch out for two different `Project` types:

- `lib/types/project.ts` is the Supabase row.
- `lib/types/projects.ts` is the static home-page card.

**CV:** `DialogCV` renders `PdfCV` inside `@react-pdf/renderer`'s `PDFViewer`. `PdfCV` is styled with `react-pdf-tailwind` (`createTw`), not regular Tailwind classes. Content is localized (`en`/`es`) in `src/lib/data/cvData.ts` through `cvByLocale`. The CV is the only localized part of the site; `LanguageSelector` is a placeholder and `ContactDialog` only simulates submission (the toast is shown by the `Toaster` mounted in `AppShell`).

**UI:** Tailwind CSS 4 (via `@tailwindcss/vite`; theme tokens live in `src/index.css`, and there is no tailwind config file) plus shadcn/ui components (new-york style, Radix, lucide icons) in `src/components/ui/`. Add primitives there with the shadcn CLI (`components.json`). The `react-refresh/only-export-components` lint rule is turned off for that folder. `ui/sonner.tsx` reads the app's own `useTheme`, not next-themes.

- **Theme:** handled by the custom `ThemeProvider.tsx` (localStorage key `vite-ui-theme`, default `system`, follows OS changes). The cycle order and labels live in `src/lib/theme.ts`.
- **Type:** DM Sans Variable (`@fontsource-variable/dm-sans`) is the only typeface. Use mono only for data such as dates, counts, and kbd.
- **Visual language:** minimalist and editorial, based on `src/assets/references/`. The palette is a warm off-white with a low-contrast dark mode. Separators are hairlines (no dashed borders). Content columns are left-aligned next to the aside at `max-w-[36rem]` (home, headers) or `max-w-[40rem]` (lists, articles). Display headings use `tracking-[-0.03em]`. Inline text links use `.text-link`.
- **Motion** is defined in `src/index.css`. `animate-blur-in` plus `stagger-N` gives a staggered page-entrance with a blur, fade, and slight rise. It replays on every route change because the `Outlet` remounts. `<Reveal>` (`src/components/Reveal.tsx`) blurs content in when it enters the viewport; it uses a ref callback and IntersectionObserver instead of `useEffect`. Both are disabled under `prefers-reduced-motion`.

**Imports:** use the `@/` alias for `src/`. `tsconfig` has `verbatimModuleSyntax`, so type-only imports need `import type`. `noUnusedLocals` and `noUnusedParameters` are enabled and will fail `pnpm build`.

## Rules

**React 19 Best Practices**:

- Use the best practices for this version using the features the seniors are implementing in their React projects and the `/react vercel-react-best-practices` skill. If this is outdated then update it.
- Try to use useEffect as last resource.
- There're new documentation for new hooks and concepts that makes React more solid, faster & secure.

**Avoid unimportant comments in code**:
Only write comments in code if is important to follow something in it. Make a document apart instead of writing many comments in code.

**Impeccable design skill**:

- Impeccable skill is used to enhance or create new UI in the project with a professional touch.
- In our folder assets you can use references based in the file name to introduce a new component or re-design a full page. You would have more context into the prompt for sure, look into references anyways I will show you the correct path to follow.
- Smooth animations, slow motion for professional and minimalistic aesthetic. Use blur if the component isn't in the view and after show it when it touch the view.
