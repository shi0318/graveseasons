import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SITE = 'https://graveseasonsguide.com';

const ROOT = dirname(fileURLToPath(import.meta.url));
// 构建时刻，作为无 git 记录时的兜底（等同于旧行为，绝不比原来差）
const BUILD_TIME = new Date().toISOString();

// 把一个 sitemap URL 映射到它的源文件，返回该文件「最后一次 git 提交时间」。
// 本站均为静态页（src/pages/*.astro），扁平路由：/characters/ → src/pages/characters.astro。
// 好处：只改了某个页面，就只有那个页面的 lastmod 变化 —— 给 Google 可信信号。
// 若源文件找不到或不在 git 历史里（如 CI 浅克隆），退回构建时间。
function lastmodFor(url) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return BUILD_TIME;
  }
  const slug = pathname.replace(/^\/+|\/+$/g, ''); // 去首尾斜杠
  const candidates =
    slug === ''
      ? ['src/pages/index.astro']
      : [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`];
  const file = candidates.find((rel) => existsSync(join(ROOT, rel)));
  if (!file) return BUILD_TIME;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out).toISOString() : BUILD_TIME;
  } catch {
    return BUILD_TIME;
  }
}

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: lastmodFor(item.url),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
