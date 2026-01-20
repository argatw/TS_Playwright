import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/SauceDemoPage';

test('test login error POM', async ({ page }) => {
  const app = new SauceDemoPage(page);

  await test.step('Open login page', async () => {
    console.log('[STEP] Open login page');
    await app.gotoSauceDemo();
  });

  await test.step('Submit invalid credentials', async () => {
    console.log('[STEP] Submit invalid credentials');
    await app.login('aaa', 'aaa123');
  });

  await test.step('Verify error is shown', async () => {
    console.log('[STEP] Verify error is shown');
    await app.expectLoginError();
  });

});

test('test login success POM', async ({ page }) => {
    const app = new SauceDemoPage(page);

    await test.step('Open login page', async () => {
        console.log('[STEP] Open login page');
        await app.gotoSauceDemo();
    });
    await test.step('Submit valid credentials', async () => {
        console.log('[STEP] Submit valid credentials');
        await app.login('standard_user', 'secret_sauce');
    });

    await test.step('Verify successful login', async () => {
        console.log('[STEP] Verify successful login');
        await app.expectSuccessfulLogin();
    });
});