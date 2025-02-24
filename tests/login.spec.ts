import { test, expect } from '@playwright/test';

test('Successful Log in', async ({ page }) => {
  await page.goto('https://demo-saas.bugbug.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Demo SaaS/);

  await page.locator('span', { hasText: 'Log in'}).first().click();
  await expect(page.locator('p', { hasText: 'Log in'})).toBeVisible();

  await page.locator('input[name="email"]').fill('betikotek@gmail.com');
  await page.locator('input[name="password"]').fill('Test1234');

  await page.locator('button[type="submit"] span span', { hasText: 'Log in'}).click();

  await expect(page.locator('p span', {hasText: 'Title'})).toBeVisible();
});