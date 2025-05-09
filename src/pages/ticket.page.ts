import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class TicketPage extends BasePage {
    createdTicketAlert: Locator;
    titleText: Locator;
    reportedByText: Locator;
    createdText: Locator;
    updatedNowText: Locator;
    descriptionText: Locator;
    statusBadge: Locator;
    newStatusBadge: Locator;
    inProgressStatusBadge: Locator;
    resolvedStatusBadge: Locator;
    closedStatusBadge: Locator;
    newStatusBadgeSelect: Locator;
    inProgressStatusBadgeSelect: Locator;
    resolvedStatusBadgeSelect: Locator;
    closedStatusBadgeSelect: Locator;
    
    constructor(page: Page) {
        super(page);
        this.createdTicketAlert = this.page.locator('div[data-title=""]:has-text("Successfully created new ticket!")');
        this.titleText = this.page.locator('p.mantine-Text-root[data-size="lg"]');
        this.reportedByText = this.page.locator('span.mantine-Text-root');
        this.createdText = this.page.locator('span p.mantine-Text-root[data-size="xs"]');
        this.updatedNowText = this.page.locator('p.mantine-focus-auto:has-text("Updated ") p.mantine-focus-auto:has-text("Now")');
        this.descriptionText = this.page.locator('textarea.mantine-Textarea-input[name="body"][readonly][data-no-overflow="true"]');
        this.statusBadge = this.page.getByTestId('ticket-status-select').last();
        this.newStatusBadge = this.page.getByRole('button', { name: 'New' });
        this.inProgressStatusBadge = this.page.getByRole('button', { name: 'In Progress' });
        this.resolvedStatusBadge = this.page.getByRole('button', { name: 'Resolved' });
        this.closedStatusBadge = this.page.getByRole('button', { name: 'Closed' });
        this.newStatusBadgeSelect = this.page.getByRole('option', { name: 'New' });
        this.inProgressStatusBadgeSelect = this.page.getByRole('option', { name: 'In Progress' });
        this.resolvedStatusBadgeSelect = this.page.getByRole('option', { name: 'Resolved' });
        this.closedStatusBadgeSelect = this.page.getByRole('option', { name: 'Closed' });
    }
    
}
