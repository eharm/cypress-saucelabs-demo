declare namespace Cypress {
    interface Chainable {
        /**
         * Finds element(s) by an HTML attribute and it's value
         * @param attribute The name of the HTML element attribute to find
         * @param value The value of the HTML element's attribute
         * @param options All options available with cy.get and a new search option
         * for partial matches of on the "value" argument
         */
        getByAttribute(
            attribute: string,
            value: string,
            options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow & { search: 'contains' | 'startsWith' | 'endsWith' }>
        ): Cypress.Chainable<Cypress.JQueryWithSelector<HTMLElement>>;
        /**
         * Finds element(s) by the "dataTag" as defined as an environment variable in
         * cypress.config.
         * @param value The value of the data tag
         * @param options All options available with cy.get and a new search option
         * for partial matches of on the "value" argument
         */
        getByDataTag(
            value: string,
            options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow & { search: 'contains' | 'startsWith' | 'endsWith' }>
        ): Cypress.Chainable<Cypress.JQueryWithSelector<HTMLElement>>;
        /**
         * Logs into the application with a username and password. These default to the creds in the cypress.config.ts
         * but can be overwritten.
         * @param username username to log in with. Defaults to Cypress.env('username') value.
         * @param password password to log in with. Defaults to Cypress.env('password') value.
         */
        login(username?: string, password?: string): void;
    }
}