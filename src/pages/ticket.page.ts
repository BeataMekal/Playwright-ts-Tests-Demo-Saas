import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class TicketPage extends BasePage {
    createdTicketAlert: Locator;
    titleText: Locator;
    reportedByText: Locator;
    createdText: Locator;
    descriptionText: Locator;
    statusBadge: Locator;
    
    constructor(page: Page) {
        super(page);
        this.createdTicketAlert = this.page.locator('div[data-title=""]:has-text("Successfully created new ticket!")');
        this.titleText = this.page.locator('p.mantine-Text-root[data-size="lg"]');
        this.reportedByText = this.page.locator('span.mantine-Text-root');
        this.createdText = this.page.locator('span p.mantine-Text-root[data-size="xs"]');
        this.descriptionText = this.page.locator('textarea.mantine-Textarea-input[name="body"][readonly][data-no-overflow="true"]');
        this.statusBadge = this.page.getByTestId('ticket-status-select');

    }
}
