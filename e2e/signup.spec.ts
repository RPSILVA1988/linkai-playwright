import { test, expect } from '@playwright/test'

import { getSignupPage } from '../support/pages/SignupPage'
import { getDashPage } from '../support/pages/DashPage'
import { getToast } from '../support/pages/components/Toast'

import { removeUserByEmail } from '../support/database'

import { User, getMeuUser, getNewUser } from '../support/fixtures/User'

test('deve cadastrar Meu usuário com sucesso', async ({ page }) => {

    const signupPage = getSignupPage(page)
    const dashPage = getDashPage(page)
    const toast = getToast(page)
    
    const user: User = getMeuUser()
    await removeUserByEmail()

    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}! 👋`)
    await expect(toast.element()).toContainText('Conta criada com sucesso!')
    await expect(toast.element()).toContainText('Bem-vindo ao Linkaí. Agora você pode criar seu perfil.')
})

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

test('não deve cadastrar quando o email for incorreto', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const user: User = {
        name: 'rani',
        username: 'rps1988',
        email: 'www.teste.com',
        password:'abc123456',
        confirmPassword: 'abc123456'
    }
    
    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await signupPage.validateEmailFieldType()

})

test('não deve cadastrar quando o username é incorreto', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    const user: User = {
        name: 'rani',
        username: 'rps1988&silva',
        email: 'rps1988@gmail.com',
        password:'abc123456',
        confirmPassword: 'abc123456'
    }
    
    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(toast.element()).toContainText('Username inválido')
    await expect(toast.element()).toContainText('O username deve conter apenas letras, números e underscores.')

})

test('não deve cadastrar as senhas não são iguais', async ({ page }) => {
    const signupPage = getSignupPage(page)
    const toast = getToast(page)

    const user: User = {
        name: 'rani',
        username: 'rps1988',
        email: 'rps1988@gmail.com',
        password:'pwd123',
        confirmPassword: 'abc123456'
    }
    
    await signupPage.open()
    await signupPage.fill(user)
    await signupPage.submit()

    await expect(toast.element()).toContainText('Senhas não coincidem')
    await expect(toast.element()).toContainText('A confirmação de senha deve ser igual à senha.')

})
