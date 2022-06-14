import { getFancyButton, getGreeting } from '../support/app.po';

describe('app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('my-email@something.com', 'myPassword');
  });

  it('should display welcome message', () => {
    getGreeting().contains('Welcome app');
  });

  it('should display fancy button', () => {
    getFancyButton().should('be.visible');
  });
});
