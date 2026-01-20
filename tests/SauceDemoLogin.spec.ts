import { test, expect } from '@playwright/test';

test('test login error inline', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').fill('aaa');
//   await page.locator('[data-test="password"]').fill('aaa123');
//   await page.locator('[data-test="login-button"]').click();
//   await expect(page.locator('[data-test="error"]')).toBeVisible();
  await test.step('Test login error inline', async () => {
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

test('test login success inline', async ({ page }) => {

  await test.step('Open login page', async () => {
    console.log('[STEP] Open login page');
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });
  
  await test.step('Submit valid credentials', async () => {
    console.log('[STEP] Submit valid credentials');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click(); 
  });

  await test.step('Verify successful login', async () => {
    console.log('[STEP] Verify successful login');      
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    // await expect(page).toHaveTitle(/inventory/);
  });
});