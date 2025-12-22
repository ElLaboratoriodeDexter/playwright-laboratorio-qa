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
