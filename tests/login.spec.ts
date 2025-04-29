import { test, expect } from '@playwright/test';

import {username, password} from '../config/config-variables'
import { LoginPage } from '../src/pages/login.page';
test.describe('Verify Log in to the system', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('');

    await expect(page).toHaveTitle(/Demo SaaS/);

    await loginPage.logInButtonHomePage.click();
    await expect(loginPage.loginHeading).toBeVisible();
  });

  test('Successful Log in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.emailInput.fill(username);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.pageHeading).toBeVisible();
  });

  test('Unsuccessful log in to system - invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invalidEmail = 'eee@ttt.pl';

    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });
  test('Unsuccessful log in to system - invalid email without @', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invalidEmail = 'test.gmail.com';
   
    await loginPage.emailInput.fill(invalidEmail);
    await loginPage.passwordInput.fill(password);

    await loginPage.loginButton.click();

    await expect(loginPage.invalidEmailErrorMessage).toBeVisible();
  });
  
  test('Unsuccessful log in to the system - invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invalidPassword = 'Test';
    
    await loginPage.emailInput.fill(username);
    await loginPage.passwordInput.fill(invalidPassword);

    await loginPage.loginButton.click();

    await expect(loginPage.loginErrorMessage).toBeVisible();
  });
});