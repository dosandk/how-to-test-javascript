describe('RangePicker', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000')
  });

  it('should be rendered correctly', () => {
    cy.get('[data-elem="from"]')
      .click()
      .get('.rangepicker__selector')
      .should('be.visible')
      .get('[data-elem="from"]')
      .click()
      .get('.rangepicker__selector')
      .should('not.be.visible')
  });
});
