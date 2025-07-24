import { test, expect } from '@playwright/test'

import { getSignupPage } from '../support/pages/SignupPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'


import { User, getNewUser } from '../support/fixtures/User'

test('deve cadastrar um novo usuário com sucesso', async ({ page }) => {

    const signupPage = getSignupPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)

    const user: User = getNewUser()

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Conta criada com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo ao Linkaí. Agora você pode criar seu perfil.')
})

test('não deve cadastrar quando nenhum campo é informando', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    await signupPage.open()
    await signupPage.submit()

    await expect(toast.element()).toContainText('Campos obrigatórios')
    await expect(toast.element()).toContainText('Por favor, preencha todos os campos.')
})

