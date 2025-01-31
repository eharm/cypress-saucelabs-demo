## Saucelabs Demo Project
This repo is a testing bed for using Cypress to test an e-commerce platform. This is a very basic app that is free for all to test against and can be found at https://www.saucedemo.com/.

## Tests
The steps for existing tests will be laid out below for ease of following along:
   1. Add to Car and confirm UI changes.
      - Confirm before state with nothing in the cart - no bubble count on the shopping cart icon
      - Get the first product in the list click the "Add to cart" button
      - Confirm product was added to the cart - a bubble counter icon with 1 overlayed on the shopping cart icon
      - Confirm the "Add to cart" button has turned into a "Remove" button and click it
      - Confirm the counter icon has been removed from the shopping cart
   3. Confirm Cart Contents
      - Go to the first product on the page
      - Store the name, price, and description of the item
      - Click the "Add to cart" button
      - Click the shopping cart button and confirm redirect
      - Confirm the name, price, and description of the cart item all match
      - Click the "Remove" button and confirm product removed from cart
      - Click the "Continue Shopping" button and confirm redirect back to inventory page

## Running the code
You can very easily run this code by following these steps:
1. Clone the repo
2. run "npm install"
3. To run the tests headed "npx cypress open" and navigate through the GUI
4. To run the tests headless "npx cypress run"
