// Renders scripts/cv/cv.html to public/javier-vallejo-cv.pdf.
// Keep the text in sync with scripts/generate-harvard-cv.py (Word version).
import { chromium } from '@playwright/test';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(pathToFileURL(join(root, 'scripts/cv/cv.html')).href);
await page.pdf({
  path: join(root, 'public/javier-vallejo-cv.pdf'),
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();
console.log('Generated public/javier-vallejo-cv.pdf');
