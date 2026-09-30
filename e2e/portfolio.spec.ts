import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage exposes its work and passes an accessibility scan', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /^Javier Vallejo builds/,
    }),
  ).toBeVisible();

  const workLinks = page
    .getByRole('region', { name: 'Work' })
    .getByRole('link');
  await expect(workLinks).toHaveCount(4);
  for (const link of await workLinks.all()) {
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
  await expect(page.getByRole('link', { name: 'Play it' })).toBeVisible();
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
