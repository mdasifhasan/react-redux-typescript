context('Home', () => {
  it('should show logo', () => {
    cy.visit('http://localhost:3000');
    cy.get('.App-logo').should('be.visible');
    cy.contains('Learn React');
  });
});
