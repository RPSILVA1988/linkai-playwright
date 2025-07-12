import { test, expect } from '@playwright/test'

test('deve logar com sucesso', async ({ page }) => {

    const user = {
        username: 'papito',
        password: 'pwd123'
    }

    await page.goto('http://localhost:3000/login')

    await page.locator('#username').fill(user.username)
    await page.locator('#password').fill(user.password)

    await page.locator('button[type="submit"]').click()

    const titulo = page.locator('h1')
    await expect(titulo).toContainText('Olá, Fernando!')
});
