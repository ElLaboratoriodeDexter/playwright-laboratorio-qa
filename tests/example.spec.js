import { test, expect } from '@playwright/test';

test('playwright.dev tiene Playwright en el título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Ambassadors incluye a Carlos Gauto de Argentina', async ({ page }) => {
  await page.goto('https://playwright.dev/community/ambassadors');
  // Espera a que el nombre Carlos Gauto esté visible
  await expect(page.getByText('Carlos Gauto')).toBeVisible();
  // Verifica que la ubicación sea Argentina
  await expect(page.getByText('Argentina')).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check search input visibility', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect the search button to be visible
  await expect(page.getByLabel('Search')).toBeVisible();
});

test('el enlace Get started redirige a la página de instalación', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('la búsqueda funciona correctamente', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('locators');
  await expect(page.getByRole('link', { name: 'Locators', exact: true })).toBeVisible();
});
