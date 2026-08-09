# Sampath Putrevu

Personal website for Sampath Putrevu, Fractional VP Marketing and Head of Narrative for AI and B2B SaaS companies.

## Live site
https://sampathputrevu.com

## Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Routes
- `/` — Homepage featuring narrative positioning, positioning thesis, client work highlights, and contact links
- `/work` — Deep-dive portfolio page covering selected engagements across Champ AI, Zenskar, Web3Auth, Accel, Masai School, and YourStory

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Type check

```bash
npm run lint
```

## Project structure

- `src/HomePage.tsx` — Main landing page component with hero section, credibility stats, narrative services, case study highlights, and CTA footer.
- `src/WorkPage.tsx` — Comprehensive portfolio page detailing strategic impact, scope of work, and results for client projects.
- `src/Header.tsx` — Top navigation bar supporting route switching and direct contact access.
- `src/ByTheNumbersSection.tsx` — Credibility metrics and client logos display section.
- `src/index.css` — Global CSS configuration importing Tailwind CSS and defining utility typography styles.
- `public/` — Static assets including logos, background graphics, and favicon image files.

## Deployment

Static HTML bundle built via Vite outputted to the `dist/` directory (with prerendered route metadata for `/` and `/work`).
