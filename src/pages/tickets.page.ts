import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class TicketsPage extends BasePage {
    url = '/testing-organization/tickets';
    newButton: Locator;
    titleTextFirst: Locator;
    statusTextFirst: Locator;
    createdAtTextFirst: Locator;
    
    constructor(page: Page) {
        super(page);
        this.newButton = this.page.locator('.mantine-Button-label:has-text("New")');
        this.titleTextFirst = this.page.locator('div.mantine-Group-root > p.mantine-Text-root[data-size="sm"]').nth(1);
        this.statusTextFirst = this.page.locator('div[data-testid="ticket-status"] > div > span.mantine-Badge-label').first();
        this.createdAtTextFirst = this.page.locator('p.mantine-Text-root[data-size="xs"]').first();
    }

    getReportedByValueLocator(page: Page, username: string){
        const reportedByValueLocator = page.locator(`.mantine-Text-root:has-text("${username}")`).first();
        return reportedByValueLocator;
    }
    getStatusValueLocator(page: Page, statusName: string){
        const statusValueLocator = page.locator(`.mantine-Badge-label:has-text("${statusName}")`).first();
        return statusValueLocator;
    }
    getTicketRowByTitleLocator(page: Page, title: string){
        const ticketRows = page.locator(`div.transition_background-color_100ms_ease:has-text("${title}")`);
        return ticketRows;
    }
    }
