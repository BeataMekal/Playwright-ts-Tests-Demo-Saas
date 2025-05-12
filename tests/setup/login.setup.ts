import { STORAGE_STATE } from '../../playwright.config';
import { expect, test as setup } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { password, username } from '../../config/config-variables';

setup('login and save session', async ({ page }) => {
  //Arrange;
  const loginPage = new LoginPage(page);

  //Act
  await loginPage.login(username, password);
  await expect(loginPage.columnName).toBeVisible();

  await page.context().storageState({ path: STORAGE_STATE });
});