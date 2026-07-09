# Javier Vallejo portfolio

A content-first portfolio for Javier Vallejo, a full-stack developer based in Gibraltar. The site is built with React, TypeScript, Vite, and Tailwind CSS, with static pre-rendering for the homepage and every project case study.

## What is included

- Proof-led homepage with three featured projects and a compact archive
- Dedicated, shareable case-study routes under `/work/:slug/`
- Pre-rendered HTML, route-specific metadata, structured data, and sitemap entries
- Accessible keyboard navigation, persistent project actions, reduced-motion support, and responsive layouts
- Extracted project, experience, capability, and site content
- Optimized AVIF assets with browser fallbacks
- Downloadable one-page CV
- Vercel page analytics and privacy-safe interaction events for case-study, CV, and contact actions
- Unit, content-integrity, end-to-end, accessibility, and broken-link checks
- GitHub Actions validation

## Local development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Quality commands

```bash
npm run typecheck     # TypeScript project references
npm run lint          # ESLint
npm run test:run      # Vitest and Testing Library
npm run build         # Client build, SSR build, and static pre-render
npm run test:e2e      # Playwright and axe accessibility checks
npm run check:links   # External portfolio link validation
npm run validate      # Lint, unit tests, and production build
```

Playwright requires a browser installation on a new machine:

```bash
npx playwright install chromium
```

## Content architecture

Content is deliberately separated from layout code:

```text
src/content/site.ts        Identity, availability, capabilities, proof points
src/content/projects.ts    Project cards and complete case-study narratives
src/content/experience.ts  Roles, outcomes, dates, and references
```

To add a project, add one typed object to `src/content/projects.ts`. It will automatically appear in the featured or archive collection, receive a `/work/:slug/` route, be included in the pre-rendered build, and be added to the generated sitemap.

## Rendering architecture

- `src/main.tsx` hydrates pre-rendered HTML in production and mounts normally during development.
- `src/entry-server.tsx` renders the same route tree using `StaticRouter`.
- `scripts/prerender.mjs` builds static HTML for every known route, injects metadata and JSON-LD, and regenerates the production sitemap.
- `src/components/Seo/Seo.tsx` keeps metadata accurate during client-side navigation.

This keeps the deployment fully static while giving recruiters and search engines useful HTML before JavaScript executes.

## CV

The PDF is generated from known portfolio facts with the bundled ReportLab workflow:

```bash
python3 scripts/generate-cv.py
```

The canonical artifact is written to `output/pdf/javier-vallejo-cv.pdf` and copied to `public/javier-vallejo-cv.pdf` for the website download links.

## Deployment

Vercel serves the `dist` directory produced by `npm run build`. Security and caching headers live in `vercel.json`. Every project route is emitted as a nested `index.html`, so direct visits do not depend on an SPA fallback.

## Maintenance checklist

- Replace approximate performance claims when a more precise measurement definition is available.
- Run `npm run check:links` before publishing content updates.
- Keep project outcomes and current-role dates fresh.
- Run `npm audit` and update dependencies deliberately; major framework migrations should remain separate from content changes.
- Update the CV whenever experience content materially changes.
