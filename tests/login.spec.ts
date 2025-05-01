import { test, expect } from '@playwright/test';
import {username, password} from '../config/config-variables'
import { LoginPage } from '../src/pages/login.page';

let loginPage: LoginPage;

test.describe('Verify Log in to the system', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('');

    await expect(page).toHaveTitle(/Demo SaaS/);

    await loginPage.logInButtonHomePage.click();
    await expect(loginPage.loginHeading).toBeVisible();
  });

  test('Log in with correct credentials', async ({ page }) => {
    await loginPage.emailInput.fill(username);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.pageHeading).toBeVisible();
  });

  test('Reject login with incorrect email', async ({ page }) => {
    const invalidEmail = 'eee@ttt.pl';

    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });
  test('Reject login with incorrect email without @', async ({ page }) => {
    const invalidEmail = 'test.gmail.com';
   
    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.invalidEmailErrorMessage).toBeVisible();
  });
  
  test('Reject login with incorrect password', async ({ page }) => {
    const invalidPassword = 'Test';
    
    await loginPage.emailInput.fill(username);
    await loginPage.passwordInput.fill(invalidPassword);

    await loginPage.loginButton.click();

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });
});