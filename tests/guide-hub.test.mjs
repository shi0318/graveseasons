import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('guide hub promotes the consolidated release and demo guides', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');
  assert.ok(latest.includes('href="/release-date/"'));
  assert.ok(latest.includes('href="/demo-status/"'));
});

