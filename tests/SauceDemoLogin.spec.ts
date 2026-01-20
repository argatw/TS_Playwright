import { test, expect } from '@playwright/test';

test('test login error', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('aaa');
//   await page.locator('[data-test="password"]').fill('aaa123');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.locator('[data-test="error"]')).toBeVisible();
  await test.step('Open login page', async () => {
    console.log('[STEP] Open login page');
    await page.goto('https://www.saucedemo.com/');
  });

  await test.step('Submit invalid credentials', async () => {
    console.log('[STEP] Submit invalid credentials');
    await page.locator('[data-test="username"]').fill('aaa');
    await page.locator('[data-test="password"]').fill('aaa123');
    await page.locator('[data-test="login-button"]').click();
  });

  await test.step('Verify error is shown', async () => {
    console.log('[STEP] Verify error is shown');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});

test('test login success', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="error"]').click();
//   await page.locator('[data-test="password"]').dblclick();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await expect(page).toHaveTitle(/inventory/);

});