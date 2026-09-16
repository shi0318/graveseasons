import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const requiredSourceUrls = [
  'https://store.steampowered.com/app/3255110/Grave_Seasons/',
  'https://blumhouse.com/games/grave-seasons',
  'https://store.playstation.com/en-us/concept/10014259',
  'https://www.microsoft.com/store/productid/9n36kgdxkm0s',
];

const requiredPages = [
  '/',
  '/guide/',
  '/multiplayer-co-op-status/',
  '/romance-guide/',
  '/walkthrough/',
  '/characters/',
  '/collectibles/',
  '/platforms/',
  '/residents/',
  '/tips/',
  '/quests/',
  '/release-date/',
  '/download/',
  '/about/',
  '/privacy-policy/',
  '/contact/',
];

const requiredImages = [
  'public/images/grave-seasons-hero.jpg',
  'public/images/grave-seasons-title.png',
  'public/images/grave-seasons-steam-header.jpg',
  'public/images/grave-seasons-farm-harvest.png',
  'public/images/grave-seasons-town-night.png',
];

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const image of requiredImages) {
  assert(existsSync(join(root, image)), `Missing official image: ${image}`);
}

for (const page of requiredPages) {
  const outputPath =
    page === '/'
      ? join(root, 'dist', 'index.html')
      : join(root, 'dist', page.replace(/^\/|\/$/g, ''), 'index.html');
  assert(existsSync(outputPath), `Missing built route: ${page}`);
}

const forbiddenBuiltPages = ['/romance/'];
for (const page of forbiddenBuiltPages) {
  const outputPath = join(root, 'dist', page.replace(/^\/|\/$/g, ''), 'index.html');
  assert(!existsSync(outputPath), `Deprecated route should not be built as an indexable page: ${page}`);
}

const distIndex = join(root, 'dist', 'index.html');
if (existsSync(distIndex)) {
  const distText = readFileSync(join(root, 'dist', 'index.html'), 'utf8');
  const bodyText = distText
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
  assert(distText.includes('Grave Seasons Guide'), 'Homepage H1/title target is missing.');
  assert(distText.includes('application/ld+json'), 'JSON-LD schema is missing from homepage.');
  assert(distText.includes('"@type":"FAQPage"'), 'Homepage FAQPage schema is missing.');
  assert(distText.includes('When does Grave Seasons release?'), 'Homepage release FAQ is missing.');
  assert(wordCount >= 1200, `Homepage content is too thin: ${wordCount} words found.`);
  assert(!distText.includes('"@type":"WebSite"') || !distText.includes('"about":{"@type":"VideoGame"'), 'Homepage WebSite schema should not embed VideoGame in about.');
  assert(distText.includes('href="/about/"'), 'Footer must link to /about/.');
  assert(distText.includes('href="/contact/"'), 'Footer must link to /contact/.');
}

const builtHeader = existsSync(distIndex) ? readFileSync(distIndex, 'utf8') : '';
assert(!builtHeader.includes('href="/romance/"'), 'Deprecated /romance/ link is still present in rendered homepage.');

const headerMarkup = builtHeader.match(/<header[\s\S]*?<\/header>/i)?.[0] ?? '';
const footerMarkup = builtHeader.match(/<footer[\s\S]*?<\/footer>/i)?.[0] ?? '';
const primaryNavigation = [
  '/guide/',
  '/romance-guide/',
  '/walkthrough/',
  '/characters/',
  '/farming-crafting-investigation/',
  '/killer-decisions-and-replay/',
];
const footerOnlyNavigation = ['/tips/', '/quests/', '/release-date/', '/download/'];

for (const href of primaryNavigation) {
  assert(headerMarkup.includes(`href="${href}"`), `Primary navigation is missing ${href}.`);
}
for (const href of footerOnlyNavigation) {
  assert(!headerMarkup.includes(`href="${href}"`), `Primary navigation must not include ${href}.`);
  assert(footerMarkup.includes(`href="${href}"`), `Footer navigation is missing ${href}.`);
}
assert(!headerMarkup.includes('href="/multiplayer-co-op-status/"'), 'Multiplayer page must stay out of primary navigation.');

const redirectsPath = join(root, 'public', '_redirects');
assert(existsSync(redirectsPath), 'Cloudflare Pages redirect file is missing.');
if (existsSync(redirectsPath)) {
  const redirects = readFileSync(redirectsPath, 'utf8');
  assert(redirects.includes('/romance/ /romance-guide/ 301'), 'Deprecated /romance/ route must 301 to /romance-guide/.');
}

const sitemapPath = join(root, 'dist', 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  assert(sitemap.includes('https://graveseasonsguide.com/about/'), 'Sitemap must include /about/.');
  assert(sitemap.includes('https://graveseasonsguide.com/contact/'), 'Sitemap must include /contact/.');
  assert(sitemap.includes('<loc>https://graveseasonsguide.com/multiplayer-co-op-status/</loc><lastmod>2026-08-31T00:00:00.000Z</lastmod>'), 'Sitemap must include the multiplayer page with the 2026-08-31 lastmod.');
}

const multiplayerPath = join(root, 'dist', 'multiplayer-co-op-status', 'index.html');
if (existsSync(multiplayerPath)) {
  const multiplayerText = readFileSync(multiplayerPath, 'utf8');
  const articleMarkup = multiplayerText.match(/<article[\s\S]*?<\/article>/i)?.[0] ?? '';
  assert(multiplayerText.includes('<title>Grave Seasons Multiplayer and Co-op Status</title>'), 'Multiplayer page title is missing the complete game name.');
  assert(multiplayerText.includes('name="description" content="Grave Seasons multiplayer and co-op status:'), 'Multiplayer page description is missing the complete game name.');
  assert(articleMarkup.includes('<h1'), 'Multiplayer page H1 is missing.');
  assert(articleMarkup.includes('Grave Seasons Multiplayer and Co-op Status'), 'Multiplayer page H1 is missing the complete game name.');
  assert(articleMarkup.includes('/images/grave-seasons-town-night.webp'), 'Multiplayer page is missing its town-night image.');
  assert(!articleMarkup.includes('Fact sources') && !articleMarkup.includes('Sources and verification'), 'Multiplayer page must not render a source panel.');
  assert(!articleMarkup.includes('store.steampowered.com') && !articleMarkup.includes('blumhouse.com'), 'Multiplayer article body must not display source links.');
}

const charactersPath = join(root, 'dist', 'characters', 'index.html');
if (existsSync(charactersPath)) {
  const charactersText = readFileSync(charactersPath, 'utf8');
  assert(charactersText.includes('Character overview'), '/characters/ must be positioned as the character overview page.');
  assert(charactersText.includes('short confirmed-name overview'), '/characters/ must explain it is the short confirmed-name overview.');
  assert(!charactersText.includes('Resident tracker'), '/characters/ should not label itself as a resident tracker.');
}

const residentsPath = join(root, 'dist', 'residents', 'index.html');
if (existsSync(residentsPath)) {
  const residentsText = readFileSync(residentsPath, 'utf8');
  assert(residentsText.includes('deep resident tracking framework'), '/residents/ must be positioned as the deep resident tracking framework.');
  assert(residentsText.includes('schedule, location, romance, death, and investigation tables'), '/residents/ must own schedule/location/romance/death/investigation tracking.');
}

const sourceFiles = [
  'src/data/site.ts',
  'src/data/sources.ts',
  'src/pages/romance-guide.astro',
  'src/pages/walkthrough.astro',
  'src/pages/characters.astro',
  'src/pages/collectibles.astro',
  'src/pages/platforms.astro',
  'src/pages/residents.astro',
].map((file) => join(root, file));

for (const sourceUrl of requiredSourceUrls) {
  const found = sourceFiles.some((file) => existsSync(file) && readFileSync(file, 'utf8').includes(sourceUrl));
  assert(found, `Missing official source URL in project source: ${sourceUrl}`);
}

const forbiddenClaims = [
  'August 14, 2026',
  'Aug 14, 2026',
  '2026-08-14',
  'released on August 14',
];

for (const file of sourceFiles) {
  if (!existsSync(file)) continue;
  const text = readFileSync(file, 'utf8');
  // Verification timestamps are editorial metadata, not release-date claims.
  const claimText = text.replace(/(?:lastChecked|lastVerified|LAST_CHECKED)\s*[:=]\s*['"][^'"]+['"]/g, '');
  for (const claim of forbiddenClaims) {
    assert(!claimText.includes(claim), `Unverified release-date claim found in ${file}: ${claim}`);
  }
}

if (failures.length > 0) {
  console.error(`SEO check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed: ${requiredPages.length} routes, ${requiredImages.length} official images, and ${requiredSourceUrls.length} source URLs verified.`);
