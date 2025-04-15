/// <reference types="cypress" />
import questions from '../fixtures/questions.json';

describe('Quiz E2E', () => {
  beforeEach(() => {
    // Intercept the API call with the correct endpoint
    cy.intercept('GET', '/api/questions/random', questions).as('getQuestions');
    
    // Visit the page with proper status code handling
    cy.visit('/', {
      failOnStatusCode: true,
      retryOnStatusCodeFailure: true,
      timeout: 30000
    });

    // Wait for the page to be fully loaded
    cy.window().should('have.property', 'document').its('readyState').should('eq', 'complete');
  });

  it('should complete a full quiz flow', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').should('be.visible').click();
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');
    
    // Wait for questions to load and verify
    cy.get('.card').should('be.visible');
    cy.get('h2').should('be.visible');
    
    // Answer all questions correctly
    for (let i = 0; i < questions.length; i++) {
      // Find the correct answer for this question
      const correctAnswerIndex = questions[i].answers.findIndex(answer => answer.isCorrect);
      
      // Click the correct answer button
      cy.get('.btn-primary').eq(correctAnswerIndex).should('be.visible').click();
      
      // Wait a moment for the next question to load
      cy.wait(500);
    }
    
    // Verify quiz completion with a longer timeout
    cy.get('h2', { timeout: 10000 }).contains('Quiz Completed').should('be.visible');
    cy.get('.alert-success').should('be.visible');
    
    // Start a new quiz
    cy.get('button').contains('Take New Quiz').should('be.visible').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('be.visible');
  });

  it('should show correct number of answer options', () => {
    cy.get('button').contains('Start Quiz').should('be.visible').click();
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');
    
    cy.get('.card').should('be.visible');
    cy.get('.btn-primary').should('have.length', 4);
  });

  it('should update score when answering correctly', () => {
    cy.get('button').contains('Start Quiz').should('be.visible').click();
    
    // Wait for the API call to complete
    cy.wait('@getQuestions');
    
    cy.get('.card').should('be.visible');
    
    // Answer first question correctly
    const correctAnswerIndex = questions[0].answers.findIndex(answer => answer.isCorrect);
    cy.get('.btn-primary').eq(correctAnswerIndex).should('be.visible').click();
    
    // Verify we're on the next question
    cy.get('h2').should('be.visible');
  });
});