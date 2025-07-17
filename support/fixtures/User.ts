export interface User {
    name: string
    username: string
    password: string
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

