/// <reference types="cypress" />
require("cypress-xpath");

Cypress.Commands.add('byDataQa', (value) => {
    return cy.get(`[data-qa=${value}]`);
});

Cypress.Commands.add('containsValue', {prevSubject: 'element'}, (subject, value) => {
    return cy.wrap(subject).filter((index, element) => {
        return (element as HTMLInputElement).value === value;
    });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })