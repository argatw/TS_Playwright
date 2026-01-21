// import { test, expect } from '@playwright/test';

// test('test login success inline', async ({ page }) => {

//   await test.step('Open & Verify ParaBank login page', async () => {
//     console.log('[STEP] Open login ParaBank page');
//     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//     // await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/); 
//     await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
//   });
  
//   await test.step('Submit valid credentials & Verify Successful login', async () => {
//     console.log('[STEP] Submit valid login credentials');
//     await page.locator('input[name="username"]').fill('aaa');
//     await page.locator('input[name="password"]').fill('aaa123');
//     await page.locator('[data-test="login-button"]').click();
//     await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
//     // await expect(page.locator('#showOverview')).toContainText('Accounts Overview'); 
//   });

//   await test.step('Click Account Creation & verify click success', async () => {
//     console.log('[STEP] Click Account Creation');      
//     await page.getByRole('link', { name: 'Open New Account' }).click();
//     await expect(page.getByRole('heading', { name: 'Open New Account' })).toBeVisible();
//   });

//   await test.step('Account Creation & verify creation success', async () => {
//     console.log('[STEP] Account Creation');      
//     await page.locator('#type').selectOption('1');
//     await page.getByRole('button', { name: 'Open New Account' }).click();
//   });
// });

// test('test sample acc creation flow', async ({ page }) => {
//   await page.goto('https://parabank.parasoft.com/parabank/index.htm');
//   await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();

//   await page.getByRole('link', { name: 'Open New Account' }).click();
//   await page.locator('#type').selectOption('1');
//   await page.getByRole('button', { name: 'Open New Account' }).click();
//   await expect(page.getByText('Your new account number:')).toBeVisible();
//   await expect(page.locator('#openAccountResult')).toContainText('Your new account number:');
//   await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
//   await expect(page.getByRole('link', { name: '14565' })).toBeVisible();
//   await page.getByRole('link', { name: 'Open New Account' }).click();
//   await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();

//   await page.getByRole('heading', { name: 'Account Services' }).click();
//   await page.getByRole('link', { name: 'Log Out' }).click();
//   await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();

//   await page.locator('input[name="username"]').fill('aaa');
//   await page.locator('input[name="password"]').fill('aaa123');
//   await page.getByRole('button', { name: 'Log In' }).click();
//   await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
//   await expect(page.locator('#showOverview')).toContainText('Accounts Overview');
// });