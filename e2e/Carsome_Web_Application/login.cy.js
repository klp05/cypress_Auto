// cypress/integration/home_page_spec.js

describe('Carsome Application - Home Page Navigation', () => {
  it('should navigate to the home page successfully', () => {
    // Visit the home page URL
    cy.visit('https://www.carsome.my'); // Replace with the actual home page URL

    // Assertions to verify the home page elements
    cy.title().should('eq', 'CARSOME - #1 Online Used Cars Buying & Selling Platform');
    // Corrected URL assertion
    cy.url().should('eq', 'https://www.carsome.my/', { timeout: 10000, retry: 3 });
    // Replace with the corrected expected title
    cy.get('h1').should('contain.text', ' CARSOME Service Center Get up to RM1,500* OFF any carSign Up/Login'); // Replace with an element selector and expected text

    // Additional assertions or actions as needed
    // ...

    // Example: Clicking on a navigation link to another page
    //cy.get('.nav-link').contains('About Us').click();

    // Assertion for the new page
    cy.url().should('include', 'https://www.carsome.my/'); // Replace with the expected URL endpoint for the About Us page
    cy.title().should('eq', 'CARSOME - #1 Online Used Cars Buying & Selling Platform'); // Replace with the expected title for the About Us page
  });
});
