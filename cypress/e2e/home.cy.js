describe('Home Page', () => {
    it('should load the home page', () => {
        cy.visit('http://laravel-cypress.test');
        cy.contains('Log in');
    });
});
