import { Page } from '@playwright/test'

export function getToast(page: Page) {
    return {
        element: ()=> {
            return page.locator('.toast')
        }
    }
}