describe('activity type page', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/carros/modelos');
  })
  describe('request propeties', () => {
    it('send id property to edit car request', () => {
      cy.intercept(
        'http://localhost:3000/cars/*'
      ).as('editCarRequest');
      cy.get('#edit-button').eq(0).click();
      cy.get('#create-button').click();
      cy.wait('@editCarRequest').then((interception) => {
        expect(interception.request.url).to.equal('http://localhost:3000/cars/8');
      });
    });
  });
})
