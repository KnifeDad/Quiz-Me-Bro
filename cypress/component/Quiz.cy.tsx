/// <reference types="cypress" />
import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import questions from '../fixtures/questions.json';

// Import the component support file
import '../support/component';

// Mock fetch globally
const mockFetch = () => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(questions)
  });
};

// Override the global fetch
window.fetch = mockFetch as any;

describe('Quiz Component', () => {
  it('should show start button initially', () => {
    // Use our custom mountWithoutUrl command
    cy.mountWithoutUrl(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('should start quiz when start button is clicked', () => {
    cy.mountWithoutUrl(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
  });

  it('should show question after loading', () => {
    cy.mountWithoutUrl(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('be.visible');
    cy.get('.btn-primary').should('have.length', 4); // 4 answer buttons
  });

  it('should show score when quiz is completed', () => {
    cy.mountWithoutUrl(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.get('.card').should('be.visible');
    
    // Answer all questions correctly
    questions.forEach((_, index) => {
      // Find the correct answer button and click it
      cy.get('.btn-primary').eq(index).click();
    });

    // Verify completion screen
    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('.alert-success').should('be.visible');
  });
}); 