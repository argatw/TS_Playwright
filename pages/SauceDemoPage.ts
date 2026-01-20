import { Page, Locator, expect } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;

  // Locators
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorBanner = page.locator('[data-test="error"]');
  }

  async gotoSauceDemo() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectLoginError() {
    await expect(this.errorBanner).toBeVisible();
  }

  async expectSuccessfulLogin() {
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products');
  }

}