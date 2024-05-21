describe('Demoblaze app', () => {

  const username = 'testuser';
  const password = 'password';

  it('should register a new user', () => {
    cy.visit('/');
    cy.register(username, password);
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
    });
  });

  it('should log in with the registered user', () => {
    cy.visit('/');
    cy.login(username, password);
    cy.get('#nameofuser').should('contain', 'Welcome ' + username);
  });

  it('should add Samsung Galaxy s6 to the cart', () => {
    cy.visit('/');
    cy.login(username, password);
    cy.get('#nameofuser').should('contain', 'Welcome ' + username);

    cy.get('.hrefch').contains('Samsung galaxy s6').click();
    cy.get('.btn-success').contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
  });
});