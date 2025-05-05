import { Locator, Page } from "@playwright/test";

export class TicketsNewPage{
    submitNewTicketHeading: Locator;
    reportedByInput: Locator;
    yourNameInput: Locator;
    titleInput: Locator;
    descriptionInput: Locator;
    submitButton: Locator;
    
    constructor(private page: Page) {
        this.submitNewTicketHeading = this.page.locator('.mantine-Text-root:has-text("Submit new ticket")');
        this.reportedByInput = this.page.locator('input[name="reportedBy"]');
        this.yourNameInput = this.page.locator('input[name="authorName"]');
        this.titleInput = this.page.locator('input[name="title"]');
        this.descriptionInput = this.page.locator('textarea[name="body"]');
        this.submitButton = this.page.locator('.mantine-Button-label:has-text("Submit")');
    }
}
