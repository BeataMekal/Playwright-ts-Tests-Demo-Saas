import test, { expect, Locator } from "@playwright/test"
import { LoginPage } from "../src/pages/login.page";
import { password, username } from "../config/config-variables";
import { TicketsPage } from "../src/pages/tickets.page";
import { TicketPage } from "../src/pages/ticket.page";
import { TicketsNewPage } from "../src/pages/ticketsNew.page";
import { prepareRandomTicket } from "../src/factories/ticket.factory";

let loginPage: LoginPage;
let ticketsPage: TicketsPage;
let ticketPage: TicketPage;

test.describe.configure({ mode: 'serial' });
test.describe('Verify ticket status change functionality', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    ticketsPage = new TicketsPage(page);
    ticketPage = new TicketPage(page);
    const ticketsNewPage = new TicketsNewPage(page);

    await loginPage.logIn(username, password);
    const ticketData = prepareRandomTicket();
    
    //wait for tickets in table
    await expect(ticketsPage.getReportedByValueLocator(page, username)).toBeVisible();

    await ticketsPage.newButton.click();
    await ticketsNewPage.yourNameInput.fill(ticketData.name);
    await ticketsNewPage.titleInput.fill(ticketData.title);
    await ticketsNewPage.descriptionInput.fill(ticketData.description);
    await ticketsNewPage.submitButton.click();

    await expect(ticketPage.createdTicketAlert).toBeVisible();
    await ticketsPage.goto();
  });
  test('Change ticket status from new to in progress', async ({ page }) => {
    const statusFirstBadgeText = 'New';
    const statusSecondBadgeText = 'In Progress';

    //wait and click in ticket status in tickets table
    await ticketsPage.getStatusValueLocator(page, statusFirstBadgeText).click();

    await expect(ticketPage.titleText).toBeVisible();
    await ticketPage.statusBadge.click();
    await ticketPage.inProgressStatusBadgeSelect.click();
    const ticketTitle = await ticketPage.titleText.textContent();

    await expect(ticketPage.statusBadge).toHaveText(statusSecondBadgeText);
    await expect(ticketPage.updatedNowText).toBeVisible();

    await ticketsPage.goto();

    // find status cell in row with title from edited ticket
    let actualRow: Locator;
    if (ticketTitle) {
      actualRow = ticketsPage.getTicketRowByTitleLocator(page, ticketTitle);
    } else {
      throw new Error('ticketTitle is null');
    }
    const statusCell = actualRow.locator('div[data-testid="ticket-status"] > div > span.mantine-Badge-label');

    await expect(statusCell).toHaveText(statusSecondBadgeText);
    });
 test('Change ticket status from in progress to resolved', async ({ page }) => {
    const statusFirstBadgeText = 'In Progress';
    const statusSecondBadgeText = 'Resolved';

    //wait and click in ticket status in tickets table
    await ticketsPage.getStatusValueLocator(page, statusFirstBadgeText).click();

    await expect(ticketPage.titleText).toBeVisible();
    await ticketPage.statusBadge.click();
    await ticketPage.resolvedStatusBadgeSelect.click();
    const ticketTitle = await ticketPage.titleText.textContent();

    
    await expect(ticketPage.statusBadge).toHaveText(statusSecondBadgeText);
    await expect(ticketPage.updatedNowText).toBeVisible();

    await ticketsPage.goto();
    let actualRow: Locator;
    if (ticketTitle) {
      actualRow = ticketsPage.getTicketRowByTitleLocator(page, ticketTitle);
    } else {
      throw new Error('ticketTitle is null');
    }
    const statusCell = actualRow.locator('div[data-testid="ticket-status"] > div > span.mantine-Badge-label');

    await expect(statusCell).toHaveText(statusSecondBadgeText);
    });
    test('Change ticket status from resolved to closed', async ({ page }) => {
    const statusFirstBadgeText = 'Resolved';
    const statusSecondBadgeText = 'Closed';

    //wait and click in ticket status in tickets table
    await ticketsPage.getStatusValueLocator(page, statusFirstBadgeText).click();

    await expect(ticketPage.titleText).toBeVisible();
    await ticketPage.statusBadge.click();
    await ticketPage.closedStatusBadgeSelect.click();
    const ticketTitle = await ticketPage.titleText.textContent();

    
    await expect(ticketPage.statusBadge).toHaveText(statusSecondBadgeText);
    await expect(ticketPage.updatedNowText).toBeVisible();

    await ticketsPage.goto();
    let actualRow: Locator;
    if (ticketTitle) {
      actualRow = ticketsPage.getTicketRowByTitleLocator(page, ticketTitle);
    } else {
      throw new Error('ticketTitle is null');
    }
    const statusCell = actualRow.locator('div[data-testid="ticket-status"] > div > span.mantine-Badge-label');

    await expect(statusCell).toHaveText(statusSecondBadgeText);
    });
});