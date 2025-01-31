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

    it('Confirm Cart Contents', () => {
        let name: string;
        let description: string;
        let price: string;
        
        cy.getByDataTag('inventory-item')
            .first()
            .within(() => {
                // Get name, price, and description for first item on page
                cy.getByDataTag('inventory-item-name')
                    .invoke('text')
                    .invoke('trim')
                    .then((nm) => {
                        name = nm;
                    });

                cy.getByDataTag('inventory-item-price')
                    .invoke('text')
                    .invoke('trim')
                    .then((priceStr) => {
                        price = priceStr;
                    });
                
                cy.getByDataTag('inventory-item-desc')
                    .invoke('text')
                    .invoke('trim')
                    .then((desc) => {
                        description = desc;
                    });

                cy.getByDataTag('add-to-cart-', { search: 'startsWith' }).click();
            })

            // Open the cart and confirm URL redirect
            cy.getByDataTag('shopping-cart-link').click();
            cy.location('pathname').should('eq', '/cart.html');

            // Confirm data on page matches item selected previously
            cy.getByDataTag('inventory-item-name')
                .invoke('text')
                .should((elName: string) => {
                    Cypress.Promise.resolve(name)
                        .then((savedName) => {
                            expect(elName).to.eq(savedName);
                        })
                });

            cy.getByDataTag('inventory-item-desc')
                .invoke('text')
                .should((elDesc: string) => {
                    Cypress.Promise.resolve(description)
                        .then((savedDesc) => {
                            expect(elDesc).to.eq(savedDesc);
                        })
                });

            cy.getByDataTag('inventory-item-price')
                .invoke('text')
                .should((elPrice: string) => {
                    Cypress.Promise.resolve(price)
                        .then((savedPrice) => {
                            expect(elPrice).to.eq(savedPrice);
                        })
                })

            // Click remove item and confirm it's gone
            cy.getByDataTag('remove-', { search: 'startsWith' }).click();
            cy.getByDataTag('inventory-item').should('not.exist');

            // Go back to inventory and confirm redirect
            cy.getByDataTag('continue-shopping')
                .should('contain.text', 'Continue Shopping')
                .click();
            cy.location('pathname').should('eq', '/inventory.html');
    })
})