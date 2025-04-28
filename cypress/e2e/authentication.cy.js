describe('User Registration and Login', () => {
    const email = `testuser+${Date.now()}@example.com`;
    const password = 'password123';

    it('should register a new user', () => {
        cy.visit('http://laravel-cypress.test/register');

        cy.get('input[name="name"]').type('Test User');
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="password_confirmation"]').type(password);

        cy.get('button[type="submit"]').click();

        // After registration, should be redirected to dashboard
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard');
    });

    it('should login the newly registered user', () => {
        cy.visit('http://laravel-cypress.test/login');

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard');
    });
});
