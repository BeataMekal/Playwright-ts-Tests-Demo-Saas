import test, { expect } from "@playwright/test"
import { LoginPage } from "../src/pages/login.page";
import { password, username } from "../config/config-variables";
import { TicketsPage } from "../src/pages/tickets.page";
import { TicketsNewPage } from "../src/pages/ticketsNew.page";
import { TicketPage } from "../src/pages/ticket.page";
import { prepareRandomTicket } from "../src/factories/ticket.factory";

let loginPage: LoginPage;

test.describe('Verify Log in to the system', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.logIn(username, password);
  });
  test('Create ticket with all fields filled', async ({ page }) => {
    const ticketsPage = new TicketsPage(page);
    const ticketsNewPage = new TicketsNewPage(page);
    const ticketPage = new TicketPage(page);
    const createdNowText = 'now';
    const statusBadgeText = 'New';
    const ticketData = prepareRandomTicket();

    //wait for tickets in table
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();

    await ticketsPage.newButton.click();
    await expect(ticketsNewPage.submitNewTicketHeading).toBeVisible();
    await expect(ticketsNewPage.reportedByInput).toHaveValue(username);
    await ticketsNewPage.yourNameInput.fill(ticketData.name);
    await ticketsNewPage.titleInput.fill(ticketData.title);
    await ticketsNewPage.descriptionInput.fill(ticketData.description);
    await ticketsNewPage.submitButton.click();

    await expect(ticketPage.createdTicketAlert).toBeVisible();
    await expect(ticketPage.titleText).toHaveText(ticketData.title);
    await expect(ticketPage.reportedByText).toHaveText(`${ticketData.name} (${username})`);
    await expect(ticketPage.createdText).toHaveText(createdNowText);
    await expect(ticketPage.descriptionText).toHaveText(ticketData.description);
    await expect(ticketPage.statusBadge).toHaveText(statusBadgeText);

    await ticketsPage.goto();

    await expect(ticketsPage.titleTextFirst).toHaveText(ticketData.title);
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();
    await expect(ticketsPage.statusTextFirst).toHaveText(statusBadgeText);
    await expect(ticketsPage.createdAtTextFirst).toHaveText(createdNowText);

    });
  test('Should create ticket with one character in all fields', async ({ page }) => {
    const ticketsPage = new TicketsPage(page);
    const ticketsNewPage = new TicketsNewPage(page);
    const ticketPage = new TicketPage(page);
    const createdNowText = 'now';
    const statusBadgeText = 'New';
    const nameText = 'A';
    const titleText = 't';
    const descriptionText = 'd';

    //wait for tickets in table
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();

    await ticketsPage.newButton.click();
    await expect(ticketsNewPage.submitNewTicketHeading).toBeVisible();
    await expect(ticketsNewPage.reportedByInput).toHaveValue(username);
    await ticketsNewPage.yourNameInput.fill(nameText);
    await ticketsNewPage.titleInput.fill(titleText);
    await ticketsNewPage.descriptionInput.fill(descriptionText);
    await ticketsNewPage.submitButton.click();

    await expect(ticketPage.createdTicketAlert).toBeVisible();
    await expect(ticketPage.titleText).toHaveText(titleText);
    await expect(ticketPage.reportedByText).toHaveText(`${nameText} (${username})`);
    await expect(ticketPage.createdText).toHaveText(createdNowText);
    await expect(ticketPage.descriptionText).toHaveText(descriptionText);
    await expect(ticketPage.statusBadge).toHaveText(statusBadgeText);

    await ticketsPage.goto();

    await expect(ticketsPage.titleTextFirst).toHaveText(titleText);
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();
    await expect(ticketsPage.statusTextFirst).toHaveText(statusBadgeText);
    await expect(ticketsPage.createdAtTextFirst).toHaveText(createdNowText);

    });
    
});