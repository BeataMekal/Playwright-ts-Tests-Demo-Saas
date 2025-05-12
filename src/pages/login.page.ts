import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
export class LoginPage extends BasePage {
  loginHeading: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  columnName: Locator;
  loginButton: Locator;
  logInButtonHomePage: Locator;
  loginErrorMessage: Locator;
  invalidEmailErrorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = this.page.locator('input[name="email"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.columnName = this.page.locator("p span", { hasText: "Title" });
    this.logInButtonHomePage = this.page
      .locator("span", { hasText: "Log in" })
      .first();
    this.loginButton = this.page.locator('button[type="submit"] span span', {
      hasText: "Log in",
    });
    this.loginHeading = this.page.locator("p", { hasText: "Log in" });
    this.loginErrorMessage = this.page.locator("p", {
      hasText: /^Invalid email or password$/,
    });
    this.invalidEmailErrorMessage = this.page.locator("p", {
      hasText: /^Invalid email$/,
    });
  }
  async login(username: string, password: string) {
    await this.page.goto("");
    await this.logInButtonHomePage.click();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
