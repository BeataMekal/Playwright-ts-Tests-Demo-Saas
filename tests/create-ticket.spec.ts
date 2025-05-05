import test, { expect } from "@playwright/test"
import { LoginPage } from "../src/pages/login.page";
import { password, username } from "../config/config-variables";
import { TicketsPage } from "../src/pages/tickets.page";
import { TicketsNewPage } from "../src/pages/ticketsNew.page";
import { TicketPage } from "../src/pages/ticket.page";

let loginPage: LoginPage;

test.describe('Verify Log in to the system', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.logIn(username, password);
  });
  test('Create ticket with all filled fields', async ({ page }) => {
    const ticketsPage = new TicketsPage(page);
    const ticketsNewPage = new TicketsNewPage(page);
    const ticketPage = new TicketPage(page);
    
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();
    await ticketsPage.newButton.click();
    await expect(ticketsNewPage.submitNewTicketHeading).toBeVisible();
    await expect(ticketsNewPage.reportedByInput).toHaveValue(username);
    await ticketsNewPage.yourNameInput.fill('Anna');
    await ticketsNewPage.titleInput.fill('Some urgent agreements');
    await ticketsNewPage.descriptionInput.fill('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    await ticketsNewPage.submitButton.click();

    await expect(ticketPage.createdTicketAlert).toBeVisible();
  
    });
});