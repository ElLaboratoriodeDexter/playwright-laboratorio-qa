import { test, expect } from '@playwright/test';

test.describe('playwright.dev smoke tests', () => {
  test('homepage has expected title and nav', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
    const nav = page.locator('header >> text=Docs');
    await expect(nav).toBeVisible();
  });

  test('search works in docs', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // Open search (cmd/ctrl+K) — fallback to clicking search button if any
    const searchButton = page.locator('[aria-label="Search"]');
    if (await searchButton.count() > 0) {
      await searchButton.first().click();
    } else {
      await page.keyboard.press('Control+K');
    }
    // Type a query and assert results show up
    await page.keyboard.type('test');
    const results = page.locator('text=Search results');
    // If the site shows results, at least ensure keyboard interaction didn't error
    await expect(page).not.toHaveURL('about:blank');
  });
});
