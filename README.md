# Goodness Oni · Portfolio

Personal site of Goodness Oni, AI/ML engineer and founder of OGverse Innovations.

Live: https://engrog.tech

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

## Custom domain

The site is served at https://engrog.tech. Canonical, Open Graph, Twitter, JSON-LD, robots.txt and sitemap.xml URLs all come from `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml`, plus `public/CNAME`.

Do not hard-code the host in page content. Shared SEO copy lives in `src/lib/site.ts`.

## Google Search Console

1. Add the live URL as a URL-prefix property in [Google Search Console](https://search.google.com/search-console).
2. Choose the HTML-tag method. Google gives you a tag like `<meta name="google-site-verification" content="TOKEN" />`.
3. Put only the `TOKEN` (the `content` value) in `.github/workflows/deploy.yml` as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. `src/app/layout.tsx` reads that value and emits the meta tag at build time.
4. Push to `main`, wait for Pages to redeploy, then click Verify in Search Console.
5. Once verified, submit `https://engrog.tech/sitemap.xml` under Sitemaps.
