# Sampath Putrevu

Personal portfolio for [sampathputrevu.com](https://sampathputrevu.com): narrative, positioning, and marketing for AI and B2B SaaS founders.

## What is here

- A homepage explaining the positioning, approach, experience, and fit
- A work page with selected outcomes and supporting evidence
- Static metadata for both routes so search engines and social previews receive the right page information before JavaScript runs
- Responsive layouts, reduced-motion support, and optimized image assets

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Motion and Lucide icons

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
npm audit
```

The production build writes the homepage to `dist/index.html` and the work page to `dist/work/index.html`.

## Project structure

```text
src/
  HomePage.tsx             Homepage content
  WorkPage.tsx             Selected work
  ByTheNumbersSection.tsx  Career proof points
  Header.tsx               Responsive navigation
  useMetadata.ts           Client-side route metadata
  index.css                Design system and layouts
work/index.html            Static metadata entry for /work
public/                    Favicons, social image, sitemap, robots.txt
```

## Deployment

Deploy the contents produced by `npm run build`. The host should serve `dist/work/index.html` for `/work` and use the main page as the fallback for unknown client-side routes.
