import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('playwright has title POM', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.goto();
  await homePage.expectTitle();
});

test('playwright get started link POM', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.goto();
  await homePage.goToGetStarted();
});
