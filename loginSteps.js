import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    // cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit()
})

// When('I submit login', () => {
    // cy.get('#user_login').type('username')
    // cy.get('#user_password').type('password')    TE TRZY LINIE SA PODSTAWOWYMI 
    // cy.get('input[name="submit"]').click()
    // LoginPage.fillUsername('username')
    // LoginPage.fillPassword('password')           TE TRZY LINIE SA Z WZOREM OBIEKTOWYM
    // LoginPage.submit()

// })
// TE PONIZEJ SA Z PARAMETREM DYNAMICZNYM - PODSTAWIAMY {STRING}
When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

When('I click on submit login', () => {
    LoginPage.submit()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I should see error message', () => {
    LoginPage.shouldShowErrorMessage()
})