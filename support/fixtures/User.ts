import { faker } from '@faker-js/faker'

export interface User {
    name: string
    username: string
    email: string
    password: string
}

export function getNewUser() {
    return {
        name: faker.person.fullName(),
        username: faker.internet.username().replace('.', ''),
        email: faker.internet.email(),
        password: 'pwd123'
    }
}


export const Users = {
    validUser: {
        name: 'Fernando',
        username: 'papito',
        password: 'pwd123'
    },
    wrongPassword: {
        name: 'Fernando',
        username: 'papito',
        password: '123456'
    },
    userNotFound: {
        name: 'Fernando',
        username: 'not-found',
        password: '123456'
    },
    emptyFields: {
        name: 'Fernando',
        username: '',
        password: ''
    },
    missingUsername: {
        name: 'Fernando',
        username: '',
        password: 'pwd123'
    },
    missingPassword: {
        name: 'Fernando',
        username: 'papito',
        password: ''
    }
}

