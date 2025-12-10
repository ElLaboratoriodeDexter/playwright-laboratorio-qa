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

test('Navegación por la documentación', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('https://playwright.dev/');

  // Hacer clic en el enlace "Docs"
  await page.getByRole('link', { name: 'Docs' }).click();

  // Verificar que estamos en la página de introducción
  await expect(page).toHaveURL(/.*\/docs\//);
  await expect(page).toHaveTitle(/Installation|Introduction/);

  // Hacer clic en "Writing tests" en el menú lateral
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();

  // Verificar que estamos en la página de Writing tests
  await expect(page).toHaveURL('https://playwright.dev/docs/writing-tests');
  await expect(page).toHaveTitle(/Writing tests/);
});
