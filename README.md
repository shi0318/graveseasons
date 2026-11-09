# Grave Seasons Guide

Independent, source-tracked fan guide for **Grave Seasons** (Perfect Garbage / Blumhouse Games, scheduled for March 9, 2027) — a farming murder-mystery set in Ashenridge.

🔗 **Live site: https://graveseasonsguide.com**

Every fact carries a visible confirmation status and links back to its source (official Blumhouse page, Steam App 3255110, PlayStation/Xbox listings). Nothing is fabricated.

## Tech stack

- [Astro 5](https://astro.build/) — static output (`output: 'static'`, `trailingSlash: 'always'`)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- `@astrojs/sitemap` — automatic sitemap generation

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Content

Pre-release system analysis, release and demo status, character coverage, and planning advice for Ashenridge. Pages live in `src/pages/` as Astro files; shared guide data and modification dates live in `src/data/`. Removed topics redirect through `public/_redirects`. Run `npm run build` then `npm test` before publishing.

## Disclaimer

Independent fan site. Not affiliated with or endorsed by Perfect Garbage or Blumhouse Games. All trademarks belong to their respective owners.
