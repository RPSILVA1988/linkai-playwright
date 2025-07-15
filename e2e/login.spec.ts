import { test, expect } from '@playwright/test'

test('deve logar com sucesso', async ({ page }) => {

    const user = {
        username: 'papito',
        password: 'pwd123'
    }

    await page.goto('http://localhost:3000/login')

    await page.locator('input[placeholder="Seu @username incrível"]').fill(user.username)
    await page.locator('input[placeholder="Digite sua senha secreta"]').fill(user.password)

    await page.locator('button[type="submit"]').click()

    const title = page.locator('h1')
    await expect(title).toContainText('Olá, Fernando!')
});
