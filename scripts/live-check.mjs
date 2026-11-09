// Public production smoke check. Run after Cloudflare Pages finishes deployment.
import { readFileSync } from 'node:fs';

const origin = 'https://graveseasonsguide.com';
const errors = [];
const rules = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8')
  .split(/\r?\n/).map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#')).map((line) => line.split(/\s+/));
const removed = new Set(rules.map(([from]) => from));
async function request(path) {
  const response = await fetch(new URL(path, origin), { redirect: 'manual', signal: AbortSignal.timeout(20000) });
  return response;
}
async function batches(items, action) {
  for (let i = 0; i < items.length; i += 5) {
    const results = await Promise.allSettled(items.slice(i, i + 5).map(action));
    for (const result of results) if (result.status === 'rejected') errors.push(String(result.reason));
  }
}
const sitemapResponse = await request('/sitemap-0.xml');
if (sitemapResponse.status !== 200) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const localSitemap = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([_, entry]) => ({
  url: entry.match(/<loc>(.*?)<\/loc>/)?.[1],
  date: entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
}));
const paths = entries.map(({ url }) => new URL(url).pathname).sort();
const expectedPaths = [...localSitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname).sort();
if (JSON.stringify(paths) !== JSON.stringify(expectedPaths)) errors.push('Live sitemap route set differs from this build.');
await batches(entries, async ({ url, date }) => {
  const path = new URL(url).pathname;
  if (removed.has(path)) errors.push(`Removed route still in live sitemap: ${path}`);
  if (!date || Number.isNaN(Date.parse(date))) errors.push(`Missing lastmod: ${path}`);
  const response = await request(path);
  if (response.status !== 200) errors.push(`${path}: HTTP ${response.status}`);
  const html = await response.text();
  if (!html.includes('href="/terms/"')) errors.push(`Terms link missing: ${path}`);
  if (!html.includes(`href="${url}"`)) errors.push(`Self canonical missing: ${path}`);
});
await batches(rules, async ([from, to, status]) => {
  const response = await request(from);
  const location = response.headers.get('location');
  if (response.status !== Number(status) || !location || new URL(location, origin).pathname !== to) {
    errors.push(`${from}: expected ${status} -> ${to}, got ${response.status} -> ${location}`);
  }
});
for (const path of ['/release-date/', '/demo-status/']) {
  const response = await request(path);
  if (!(await response.text()).includes('March 9, 2027')) errors.push(`Current release date missing: ${path}`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Production verified: ${entries.length} sitemap pages, ${rules.length} permanent redirects, policy links and current release date.`);
}
