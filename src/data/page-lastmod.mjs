// Date of the last commit that materially changed each page's rendered main content
// (its page file, or site data it renders as prose/cards). Verification-only edits,
// such as a source panel's "checked" date or note, do not move a page's lastmod.
// Update a path here whenever its main content changes.
const PAGE_LASTMOD = {
  '/': '2026-11-09',
  '/release-date/': '2026-11-09',
  '/demo-status/': '2026-11-09',
  '/terms/': '2026-11-09',
  '/privacy-policy/': '2026-11-09',
  '/tips/': '2026-11-09',
  '/characters/': '2026-11-09',
  '/romance-guide/': '2026-11-09',
  '/killer-decisions-and-replay/': '2026-11-09',
  '/occult-items-victim-protection/': '2026-11-09',
  '/grave-seasons-prelaunch-one-year-planner/': '2026-11-09',
  '/multiplayer-co-op-status/': '2026-11-09',
  '/guide/': '2026-11-09',
  '/guide/page/2/': '2026-11-09',
  '/guide/page/3/': '2026-11-09',
  '/mines-roguelike-preview/': '2026-11-04',
  '/farming-crafting-investigation/': '2026-11-04',
  '/controller-and-crowbar-gameplay-preview/': '2026-11-01',
  '/gameplay-preview/': '2026-08-17',
  '/farming-grid-seasons-guide/': '2026-08-14',
  '/art-style/': '2026-08-03',
  '/character-customization/': '2026-08-03',
  '/soundtrack/': '2026-08-03',
  '/day-and-night/': '2026-07-31',
  '/map-of-ashenridge/': '2026-07-30',
  '/about/': '2026-11-09',
  '/contact/': '2026-11-09',
};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
