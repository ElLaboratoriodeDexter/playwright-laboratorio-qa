import { test, expect } from '@playwright/test';

test('playwright.dev tiene Playwright en el título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe('Ambassadors', () => {
  test.beforeEach(async ({ page }) => {
    // Ir a la URL de ambassadors antes de cada test
    await page.goto('https://playwright.dev/community/ambassadors');
  });

  test('incluye a Carlos Gauto', async ({ page }) => {
    await expect(page.getByText('Carlos Gauto')).toBeVisible();
  });

  test('incluye a Argentina', async ({ page }) => {
    await expect(page.getByText('Argentina')).toBeVisible();
  });
  test('incluye a Stefan Judis', async ({ page }) => {
    await expect(page.getByText('Stefan Judis')).toBeVisible();
  });

  test('incluye a Germany', async ({ page }) => {
    await expect(page.getByText('Germany')).toBeVisible();
  });
  test('incluye a Tally Barak', async ({ page }) => {
    await expect(page.getByText('Tally Barak')).toBeVisible();
  });
  test('incluye a Tally Barak', async ({ page }) => {
    await expect(page.getByText('Tally Barak')).toBeVisible();
  });

  test('incluye a Israel', async ({ page }) => {
    await expect(page.getByText('Israel')).toBeVisible();
  });

});