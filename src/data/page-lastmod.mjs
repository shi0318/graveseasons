// Add a path only after that page has had a material, verifiable update.
const PAGE_LASTMOD = {};

export function pageLastmod(pathname) {
  return PAGE_LASTMOD[pathname];
}
