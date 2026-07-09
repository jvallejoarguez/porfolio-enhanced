import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage exposes its work and passes an accessibility scan', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /product experiences that hold up in production/i,
    }),
  ).toBeVisible();

  const caseStudyLinks = page.getByRole('link', { name: 'Read case study' });
  await expect(caseStudyLinks).toHaveCount(3);
  for (const link of await caseStudyLinks.all()) {
    await expect(link).toBeVisible();
  }

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('project routes are pre-rendered and navigable', async ({ page }) => {
  await page.goto('/work/el-impostor/');

  await expect(page).toHaveTitle(/El Impostor case study/);
  await expect(
    page.getByRole('heading', { level: 1, name: 'El Impostor' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Play the game' })).toBeVisible();
});

test('mobile layout does not overflow horizontally', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'Mobile-only responsive assertion');
  await page.goto('/');

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
