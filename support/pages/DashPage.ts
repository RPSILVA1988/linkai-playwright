import { Page } from '@playwright/test'

export function getDashPage(page: Page) {
    return {
        welcome: () => {
            return page.locator('h1')
        }
    }
}