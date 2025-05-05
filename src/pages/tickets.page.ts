import { Locator, Page } from "@playwright/test";

export class TicketsPage{
    newButton: Locator;
    
    constructor(private page: Page) {
        this.newButton = this.page.locator('.mantine-Button-label:has-text("New")');

    }
    getReportedByValueLocator(page: Page, username: string){
        const reportedByValueLocator = page.locator(`.mantine-Text-root:has-text("${username}")`).first();
        return reportedByValueLocator;
    }
}
