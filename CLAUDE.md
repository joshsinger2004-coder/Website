# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Context

This site is being built for a friend (Josh Singer). Do **not** use any of the user's own CLI tools or MCP integrations — no `gh` CLI, no GitHub MCP, no Netlify CLI/MCP. Josh has his own GitHub and Netlify accounts and handles all deployment and repository management himself. Provide code changes and instructions only.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (output: ./dist)
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix lint issues
npm run typecheck    # Type-check via jsconfig.json
npm run preview      # Preview production build
```

## Architecture

**Stack**: React 18 + Vite 6, Tailwind CSS v3, shadcn/ui (Radix UI), React Router v6, Framer Motion. The `@/` alias resolves to `src/` (configured in `vite.config.js` via `resolve.alias`).

**Fully static**: There is no backend. No auth, no API calls, no environment variables required. The app is deployed as a static build from `./dist`.

**Page routing**: `src/pages.config.js` is auto-generated — never add imports or modify `PAGES` manually. Files added to `src/pages/` auto-register. The only editable value is `mainPage`. There is currently one page: `Home`.

**Home page sections** (`src/components/home/`):
- `HeroSection` — full-screen hero with animated orbs and scroll CTA
- `AboutSection` — artist bio with stats overlay; image is currently served from a Base44 CDN URL and should be replaced with a self-hosted asset
- `VideoSection` — embedded Vimeo player (ID `1169385537`)
- `SocialSection` — Instagram and Facebook link cards
- `ContactSection` — contact form; on submit, constructs a `mailto:josh@joshsinger.co.uk` URL and opens the user's email client
- `Footer`

**UI components**: shadcn/ui components live in `src/components/ui/` — extend or wrap them, don't edit directly.
