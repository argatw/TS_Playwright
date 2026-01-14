import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('has title', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.goto();
  await homePage.expectTitle();
});

test('get started link', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.goto();
  await homePage.goToGetStarted();
});
