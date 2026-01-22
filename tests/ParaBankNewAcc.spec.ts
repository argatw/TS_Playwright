import { test, expect } from '@playwright/test';

test('test parabank acc creation', async ({ page }) => {

  await test.step('Open & Verify ParaBank login page', async () => {
    console.log('[STEP] Open login ParaBank page');
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    // await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/); 
    await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
  });
  
  await test.step('Submit valid credentials & Verify Successful login', async () => {
    console.log('[STEP] Submit valid login credentials');
    await page.locator('input[name="username"]').fill('kaungpyae');
    await page.locator('input[name="password"]').fill('kpdnld!');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    // await expect(page.locator('#showOverview')).toContainText('Accounts Overview'); 
  });

  await test.step('Click Account Creation & verify click success', async () => {
    console.log('[STEP] Click Account Creation');      
    await page.getByRole('link', { name: 'Open New Account' }).click();
    await expect(page.getByRole('heading', { name: 'Open New Account' })).toBeVisible();
  });

  let resp;
  let payload;

  const existingAccountSelect = page.locator('select#fromAccountId');

  await test.step('Account Creation & verify creation success', async () => {
    console.log('[STEP] Account Creation');   
    await page.locator('#type').selectOption({ index: 1 });
    
    [resp] = await Promise.all([
      page.waitForResponse(res =>
        res.url().includes("/accounts") &&
        res.url().includes("/customers") &&
        res.status() === 200
      ),
    //   existingAccountSelect.selectOption('0'),
    ]);

    console.log("Account retrieval API:", resp.url());
    payload =  await resp.json();
    console.log("Account retrieval API payload:", payload);

    // 🔑 minimal render sync (needed)
    const accSelect = page.locator('#fromAccountId');
    await expect(accSelect.locator('option')).toHaveCount(1);

    // Now select safely
    await accSelect.selectOption({ index: 0 });
    await page.getByRole('button', { name: 'Open New Account' }).click();
    await expect(page.getByRole('heading', { name: 'Account Opened!' })).toBeVisible();
    await expect(page.locator('#openAccountResult')).toBeVisible();
    console.log("New account number:", await page.locator('#openAccountResult').textContent());
  });
  
});

test('create new user flow', async ({ page }) => {
    await test.step('Open & Verify ParaBank login page', async () => {
        console.log('[STEP] Open login ParaBank page');
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        // await expect(page).toHaveTitle(/ParaBank | Welcome | Online Banking/); 
        await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
      }
    );
    await test.step('Direct to Register new user page', async () => {
        console.log('[STEP] Click Register link');
        await page.getByRole('link', { name: 'Register' }).click();
        await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
        // await expect(page.locator('#showOverview')).toContainText('Accounts Overview'); 
      }
    );
    await test.step('Fill new user creation form & verify creation success', async () => {
        console.log('[STEP] Fill new user creation form');      
        await page.locator('[id="customer.firstName"]').fill('first_name');
        await page.locator('[id="customer.lastName"]').fill('last_name');
        await page.locator('[id="customer.address.street"]').fill('1 Hillview');
        await page.locator('[id="customer.address.city"]').fill('Singapore');
        await page.locator('[id="customer.address.state"]').fill('Singapore');
        await page.locator('[id="customer.address.zipCode"]').fill('123456');
        await page.locator('[id="customer.phoneNumber"]').fill('12345678');
        await page.locator('[id="customer.ssn"]').fill('123456789');
        await page.locator('[id="customer.username"]').fill('kaungpyae');
        await page.locator('[id="customer.password"]').fill('kpdnld!');
        await page.locator('#repeatedPassword').fill('kpdnld!');
        await page.getByRole('button', { name: 'Register' }).click();
        // await expect(page.getByRole('heading', { name: 'Welcome kaungpyae' })).toBeVisible();
        await expect(page.getByText('Your account was created')).toBeVisible();
      }
    );
});