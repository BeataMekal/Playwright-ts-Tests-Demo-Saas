import { Locator, Page } from '@playwright/test';
export class LoginPage{
    loginHeading: Locator;
    emailInput: Locator;
    passwordInput: Locator;
    pageHeading: Locator;
    loginButton: Locator;
    logInButtonHomePage: Locator;
    loginErrorMessage: Locator;
    invalidEmailErrorMessage: Locator;
    
    constructor(private page: Page) {
        this.emailInput = this.page.locator('input[name="email"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.pageHeading = this.page.locator('p span', { hasText: 'Title'});
        this.logInButtonHomePage = this.page.locator('span', { hasText: 'Log in'}).first();
        this.loginButton = this.page.locator('button[type="submit"] span span', { hasText: 'Log in'});
        this.loginHeading = this.page.locator('p', { hasText: 'Log in'});
        this.loginErrorMessage = this.page.locator('p', { hasText: /^Invalid email or password$/});
        this.invalidEmailErrorMessage = this.page.locator('p', { hasText: /^Invalid email$/});
    }
}
