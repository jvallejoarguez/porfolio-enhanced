// Renders scripts/og/og.html to public/img/og-card.jpg (1200×630).
import { chromium } from '@playwright/test';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
});

await page.goto(pathToFileURL(join(root, 'scripts/og/og.html')).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({
  path: join(root, 'public/img/og-card.jpg'),
  type: 'jpeg',
  quality: 90,
});
await browser.close();
console.log('Generated public/img/og-card.jpg');
