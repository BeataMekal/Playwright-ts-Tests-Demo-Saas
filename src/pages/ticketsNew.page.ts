import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class TicketsNewPage extends BasePage {
    submitNewTicketHeading: Locator;
    reportedByInput: Locator;
    yourNameInput: Locator;
    titleInput: Locator;
    descriptionInput: Locator;
    submitButton: Locator;
    goBackButton: Locator;
    oneCharMessage: Locator;
    
    constructor(page: Page) {
        super(page);
        this.submitNewTicketHeading = this.page.locator('.mantine-Text-root:has-text("Submit new ticket")');
        this.reportedByInput = this.page.locator('input[name="reportedBy"]');
        this.yourNameInput = this.page.locator('input[name="authorName"]');
        this.titleInput = this.page.locator('input[name="title"]');
        this.descriptionInput = this.page.locator('textarea[name="body"]');
        this.submitButton = this.page.locator('.mantine-Button-label:has-text("Submit")');
        this.goBackButton = this.page.locator('.mantine-Button-label:has-text("Go back")');
        this.oneCharMessage = this.page.locator('p.mantine-InputWrapper-error.mantine-TextInput-error:has-text("String must contain at least 1 character(s)")');
    }
}
