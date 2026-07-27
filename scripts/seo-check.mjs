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
  '/romance-guide/',
  '/walkthrough/',
  '/characters/',
  '/romance/',
  '/tips/',
  '/quests/',
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

const distIndex = join(root, 'dist', 'index.html');
if (existsSync(distIndex)) {
  const distText = readFileSync(join(root, 'dist', 'index.html'), 'utf8');
  assert(distText.includes('Grave Seasons Guide'), 'Homepage H1/title target is missing.');
  assert(distText.includes('application/ld+json'), 'JSON-LD schema is missing from homepage.');
}

const sourceFiles = [
  'src/data/site.ts',
  'src/data/sources.ts',
  'src/pages/romance-guide.astro',
  'src/pages/walkthrough.astro',
  'src/pages/characters.astro',
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
  for (const claim of forbiddenClaims) {
    assert(!text.includes(claim), `Unverified release-date claim found in ${file}: ${claim}`);
  }
}

if (failures.length > 0) {
  console.error(`SEO check failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO check passed: ${requiredPages.length} routes, ${requiredImages.length} official images, and ${requiredSourceUrls.length} source URLs verified.`);
