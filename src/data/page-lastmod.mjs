// Add a path only after that page has had a material, verifiable update.
const PAGE_LASTMOD = {
  '/still-coming-soon/': '2026-10-26',
  '/no-price-before-the-farm/': '2026-10-26',
  '/multiplayer-co-op-status/': '2026-08-31',
  '/gameplay-preview/': '2026-08-17',
  '/demo-status/': '2026-08-12',
  '/farming-grid-seasons-guide/': '2026-08-14',
  '/pre-launch-investigation-checklist/': '2026-08-14',
};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
