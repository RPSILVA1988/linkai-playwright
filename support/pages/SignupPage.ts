import { Page, expect } from '@playwright/test'

import { User } from '../fixtures/User'

export function getSignupPage(page: Page) {

    const emailField = () =>{
        return page.getByRole('textbox', { name: 'Seu melhor e-mail para receber novidades!' })
    }

    return {
        open: async () => {
            await page.goto('http://localhost:3000/cadastro')
        },
        fill: async (user: User) => {
            await page
                .getByRole('textbox', { name: 'Como você gostaria de ser chamado?' })
                .fill(user.name)

            await page
                .getByRole('textbox', { name: 'Escolha um @username único (ex: superdev_123)' })
                .fill(user.username)

            await emailField().fill(user.email)

            await page
                .getByRole('textbox', { name: 'Crie uma senha secreta e segura' })
                .fill(user.password)

            await page
                .getByRole('textbox', { name: 'Repita sua senha para garantir!' })
                .fill(user.confirmPassword)
        },
        submit: async () => {
            await page
                .getByRole('button', { name: 'Criar conta' })
                .click()
        },
        validateEmailFieldType: async () => {
            await expect(emailField()).toHaveAttribute('type', 'email')
        }
    }
}