describe('saucedemo e-commerce platform', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Log in to saucelabs', () => {
        cy.log('successful login and redirect');
    })
})