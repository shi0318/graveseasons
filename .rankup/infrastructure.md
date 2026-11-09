# 基础设施

- 正式域名：https://graveseasonsguide.com
- 托管：Cloudflare Pages，GitHub shi0318/graveseasons 的 main 分支提交触发构建部署；2026-11-09 GitHub Cloudflare Pages check 成功且实测自定义域名。
- 构建：Astro 静态 dist/；尾斜杠 URL；@astrojs/sitemap 生成站点地图。
- 重定向：public/_redirects；30 条规则，包括合并旧页、斜杠与无斜杠版本、旧目录第四页。
- 线上验证：node scripts/live-check.mjs；27 个 sitemap URL、30 个 301、政策入口与当前日期。
- 本轮没有操作 GSC/Bing 或提交 AdSense 复审；没有配置新的 IndexNow 接入。
