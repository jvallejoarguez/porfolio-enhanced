import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prerenderRoutes, render } from '../.ssr/entry-server.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const template = await readFile(join(dist, 'index.html'), 'utf8');

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function applySeo(html, seo) {
  return html
    .replace(
      /<title>.*?<\/title>/s,
      `<title>${escapeAttribute(seo.title)}</title>`,
    )
    .replace(
      /<meta name="description" content=".*?"\s*\/>/s,
      `<meta name="description" content="${escapeAttribute(seo.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/>/s,
      `<link rel="canonical" href="${escapeAttribute(seo.canonical)}" />`,
    )
    .replace(
      /<meta property="og:type" content=".*?"\s*\/>/s,
      `<meta property="og:type" content="${seo.type}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?"\s*\/>/s,
      `<meta property="og:title" content="${escapeAttribute(seo.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?"\s*\/>/s,
      `<meta property="og:description" content="${escapeAttribute(seo.description)}" />`,
    )
    .replace(
      /<meta property="og:image" content=".*?"\s*\/>/s,
      `<meta property="og:image" content="${escapeAttribute(seo.image)}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?"\s*\/>/s,
      `<meta property="og:url" content="${escapeAttribute(seo.canonical)}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?"\s*\/>/s,
      `<meta name="twitter:title" content="${escapeAttribute(seo.title)}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?"\s*\/>/s,
      `<meta name="twitter:description" content="${escapeAttribute(seo.description)}" />`,
    )
    .replace(
      /<meta name="twitter:image" content=".*?"\s*\/>/s,
      `<meta name="twitter:image" content="${escapeAttribute(seo.image)}" />`,
    );
}

for (const route of prerenderRoutes) {
  const result = render(route);
  const structuredData = JSON.stringify(result.structuredData).replaceAll(
    '<',
    '\\u003c',
  );
  const page = applySeo(template, result.seo)
    .replace(
      '<!--app-structured-data-->',
      `<script id="structured-data" type="application/ld+json">${structuredData}</script>`,
    )
    .replace('<div id="root"></div>', `<div id="root">${result.html}</div>`);
  const output =
    route === '/'
      ? join(dist, 'index.html')
      : join(dist, route.replace(/^\//, ''), 'index.html');

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, page);
}

const sitemapEntries = prerenderRoutes
  .map((route) => {
    const url =
      route === '/'
        ? 'https://www.jvallejo.dev/'
        : `https://www.jvallejo.dev${route}`;
    return `  <url>\n    <loc>${url}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`;
  })
  .join('\n');

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
);

await rm(join(root, '.ssr'), { recursive: true, force: true });
console.log(`Prerendered ${prerenderRoutes.length} routes.`);
