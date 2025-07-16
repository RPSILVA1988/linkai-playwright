import { test, expect } from '@playwright/test'

import { getLoginPage } from '../support/pages/LoginPage'

test('deve logar com sucesso', async ({ page }) => {

    const loginPage = getLoginPage(page)

    const user = {
        name: 'Fernando',
        username: 'papito',
        password: 'pwd123'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    await expect(page.locator('h1')).toContainText(`Olá, ${user.name}! 👋`)
});

test('não deve logar com senha incorreta', async ({ page }) => {

    const loginPage = getLoginPage(page)


    const user = {
        name: 'Fernando',
        username: 'papito',
        password: '123456'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
});

test('não deve logar com usuário não cadastrado', async ({ page }) => {

    const loginPage = getLoginPage(page)


    const user = {
        name: 'Fernando',
        username: 'not-found',
        password: '123456'
    }

    await loginPage.open()
    await loginPage.submit(user.username, user.password)

    const toast = page.locator('.toast')

    await expect(toast).toContainText('Oops!')
    await expect(toast).toContainText('Algo deu errado com seu login. Por favor, verifique suas credenciais e tente novamente.');
});