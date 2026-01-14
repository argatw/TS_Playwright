import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  // Locators
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async goToGetStarted() {
    await this.getStartedLink.click();
    await expect(this.installationHeading).toBeVisible();
  }
}
