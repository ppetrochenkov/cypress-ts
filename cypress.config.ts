import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://automationexercise.com/',
        pageLoadTimeout: 20000,
        defaultCommandTimeout: 10000,
        specPattern: `cypress/e2e/tests/**/*.spec.ts`,
        screenshotOnRunFailure: true,
        video: false,
        env: {
            existingUser: {
                name: 'TestUser',
                email: `test_user123@yopmail.com`,
                password: `123123`
            }
        }
    },
})