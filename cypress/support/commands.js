Cypress.Commands.add('login', (username, password) => {
  cy.get('#login2').click();
  cy.wait(500); 
  cy.get('#loginusername').type(username);
  cy.get('#loginpassword').type(password);
  cy.get('.btn-primary').contains('Log in').click();
});

Cypress.Commands.add('register', (username, password) => {
  cy.get('#signin2').click();
  cy.wait(500); 
  cy.get('#sign-username').type(username);
  cy.get('#sign-password').type(password);
  cy.get('.btn-primary').contains('Sign up').click();
});