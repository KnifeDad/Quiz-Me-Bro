/// <reference types="cypress" />

// Import component testing utilities
import { mount } from 'cypress/react18'

// Augment the Cypress namespace to include mount
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

// Add mount command to Cypress
Cypress.Commands.add('mount', mount)

// Add custom command for component testing
Cypress.Commands.add('mountComponent', (component) => {
  // Use the mount function directly
  return mount(component);
});

// Add custom command for intercepting API calls
Cypress.Commands.add('mockApi', (url, response) => {
  cy.intercept('GET', url, response).as('mockApi');
});

// Add custom command for component testing that doesn't rely on the URL
Cypress.Commands.add('mountWithoutUrl', (component) => {
  // Use the mount function directly
  return mount(component);
});

// Add custom commands here
// For more info: https://on.cypress.io/custom-commands

// Example:
// Cypress.Commands.add('login', (email, password) => { ... }) 