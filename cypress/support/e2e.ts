/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      intercept(method: string, url: string, response: any): Chainable<Element>;
    }
  }
}

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
  app.console.log = () => {};
}

// Prevent TypeScript errors when accessing the "cy" object
declare const cy: Cypress.cy & CyEventEmitter;