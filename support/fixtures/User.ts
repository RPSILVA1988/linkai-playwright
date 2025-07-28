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

