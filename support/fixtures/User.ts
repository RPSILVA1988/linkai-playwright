import { faker } from '@faker-js/faker'

export interface User {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
}

export function getMeuUser() {
    const defaultPassword = 'pwd123'

    return {
        name: 'rani',
        username: 'rps1988',
        email: 'rps1988@gmail.com',
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}

export function getNewUser() {
    const defaultPassword = 'pwd123'

    return {
        name: faker.person.fullName(),
        username: faker.internet.username().replace('.', ''),
        email: faker.internet.email(),
        password: defaultPassword,
        confirmPassword: defaultPassword
    }
}


export const Users = {
    validUser: {
        name: 'rani',
        username: 'rps1988',
        password: 'pwd123'
    },
    wrongPassword: {
        name: 'rani',
        username: 'rps1988',
        password: '123456'
    },
    userNotFound: {
        name: 'rani',
        username: 'not-found',
        password: '123456'
    },
    emptyFields: {
        name: 'rani',
        username: '',
        password: ''
    },
    missingUsername: {
        name: 'rani',
        username: '',
        password: 'pwd123'
    },
    missingPassword: {
        name: 'rani',
        username: 'rps1988',
        password: ''
    }
}

