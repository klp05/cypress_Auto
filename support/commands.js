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
import 'cypress-xpath';
Cypress.Commands.add('login', (email, password) =>
 {
    cy.visit("https://ineuron-courses.vercel.app/login");
    // Add your login steps here
    cy.get('#email1').type(email);
    cy.get('#password1').type(password);
    cy.get('.submit-btn').click();
    // Add any additional assertions or steps after login if needed

    
  });
  Cypress.Commands.add('logout', () => {
    // Add your logout steps here
    cy.get('.navbar-menu-links > button').click();
});