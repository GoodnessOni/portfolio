# Goodness Oni · Portfolio

Personal site of Goodness Oni, AI/ML engineer and founder of OGverse Innovations.

Live: https://goodnessoni.github.io/portfolio

## Stack

- Next.js (App Router, static export) with TypeScript
- Tailwind CSS plus hand-written styles in `src/app/mockup.css` (the approved design) and `src/app/extras.css`
- Framer Motion for small transitions (drawer, quick nav, filters)
- React Three Fiber for the faint hero node mesh, lazy-loaded on capable desktops only. Phones, low-power devices and `prefers-reduced-motion` get the static SVG mesh.

## Features

- Case-study drawer for every project (Esc to close, ← → to switch, deep links like `/#p/paypal-hub`)
- Work filters on the home page, and a `/projects` archive with filters and search kept in the URL
- Experience tabs (Leadership, Internships, Volunteering) with arrow-key support
- ⌘K / Ctrl+K or `/` quick navigation
- Downloadable CV at `/Goodness_Oni_Master_CV.pdf`

## Editing content

- Projects and case studies: `src/data/projects.ts`
- Project cover illustrations: `src/data/covers.ts`
- Experience, recognition and tools: `src/data/site.ts`
- Contact details: `src/lib/site.ts`

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Deploy

Every push to `main` builds and publishes to GitHub Pages through `.github/workflows/deploy.yml`.
For a custom domain, set `NEXT_PUBLIC_BASE_PATH` to an empty string and `NEXT_PUBLIC_SITE_URL` to the domain in that workflow, then add the domain under Settings → Pages.
