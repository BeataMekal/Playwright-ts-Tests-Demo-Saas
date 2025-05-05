import { Locator, Page } from "@playwright/test";

export class TicketPage{
    createdTicketAlert: Locator;
    
    constructor(private page: Page) {
        this.createdTicketAlert = this.page.locator('div[data-title=""]:has-text("Successfully created new ticket!")');
    }
}
