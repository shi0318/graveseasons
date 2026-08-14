// Add a path only after that page has had a material, verifiable update.
const PAGE_LASTMOD = {
  '/demo-status/': '2026-08-12',
  '/farming-grid-seasons-guide/': '2026-08-14',
};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
