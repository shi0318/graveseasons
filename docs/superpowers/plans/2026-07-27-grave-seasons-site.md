# Grave Seasons Guide Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an Astro-based English Grave Seasons guide site with official-source facts, pre-launch SEO pages, and no invented route data.

**Architecture:** Static Astro pages share a single `Layout`, global site data, source tables, and reusable guide cards. Official facts live in `src/data/site.ts`, `src/data/sources.ts`, and `src/data/assets.ts`; pages consume those constants so Steam/Blumhouse facts stay consistent.

**Tech Stack:** Astro 5, Tailwind CSS 4, `@astrojs/sitemap`, local official images from Steam and Blumhouse.

---

### Task 1: Guardrail Test

**Files:**
- Create: `scripts/seo-check.mjs`
- Modify: `package.json`

- [ ] Add a Node-based SEO guardrail that checks required routes, page titles, canonical output, official source URLs, image files, and that no page states the unverified August 14 date.
- [ ] Run `npm test`; expected first result before implementation is failure because the required pages and assets do not exist.

### Task 2: Astro Foundation

**Files:**
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/layouts/Layout.astro`
- Create: `src/styles/global.css`
- Create: `src/data/site.ts`
- Create: `src/data/sources.ts`
- Create: `src/data/assets.ts`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/SourcePanel.astro`
- Create: `src/components/GuideCard.astro`
- Create: `src/components/FaqBlock.astro`
- Create: `public/robots.txt`
- Create: `public/favicon.svg`

- [ ] Implement global metadata, canonical URLs, sitemap integration, JSON-LD, and official-source components.
- [ ] Download official Steam and Blumhouse assets into `public/images/`.

### Task 3: Core SEO Pages

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/romance-guide.astro`
- Create: `src/pages/walkthrough.astro`
- Create: `src/pages/characters.astro`
- Create: `src/pages/romance.astro`
- Create: `src/pages/tips.astro`
- Create: `src/pages/quests.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/privacy-policy.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/404.astro`

- [ ] Build the plan-required page set with source-backed copy.
- [ ] Mark unreleased攻略 details as launch-tracking, not confirmed strategy.
- [ ] Add internal links between romance guide, characters, walkthrough, romance, quests, and tips.

### Task 4: Verification

**Files:**
- Build output: `dist/`

- [ ] Run `npm run build`; expected result is exit code 0 and generated sitemap.
- [ ] Run `npm test`; expected result is exit code 0 with all route/source checks passing.
- [ ] Start local dev or preview server and capture desktop/mobile screenshots with Playwright.
