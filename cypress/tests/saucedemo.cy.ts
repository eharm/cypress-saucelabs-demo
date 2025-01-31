describe('saucedemo e-commerce platform', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Add to Cart and confirm UI changes', () => {
        // Confirm before state - nothing in the cart
        cy.getByDataTag('shopping-cart-link')
            .children()
            .should('have.length', 0);

        // Get the first item in the list, add it to cart, and confirm UI changes.
        cy.getByDataTag('inventory-item')
            .first()
            .within(() => {
                // Add item to cart
                cy.getByDataTag('add-to-cart-', { search: 'startsWith' })
                    .should('have.text', 'Add to cart')
                    .click();
            })

        // Find shopping cart link and confirm length and content
        cy.getByDataTag('shopping-cart-link')
            .children()
            .should('have.length', 1)
            .should('have.text', '1');

        // Get the first item in the list, remove it from cart, and confirm UI changes.
        cy.getByDataTag('inventory-item')
            .first()
            .within(() => {
                // NOTE: data tag has changed
                cy.getByDataTag('remove-', { search: 'startsWith' })
                    .should('have.text', 'Remove')
                    .click();
            });

        // Confirm after state - nothing in the cart
        cy.getByDataTag('shopping-cart-link')
            .children()
            .should('have.length', 0);
    })
})