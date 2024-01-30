// cypress/integration/home_page_spec.js

describe('Carsome Application - Home Page Navigation', () => {
    it('should navigate to the home page successfully', () => {
      // Visit the home page URL
      cy.visit('/'); // Replace with the actual home page URL
  
      // Assertions to verify the home page elements
      //cy.title().should('eq', 'Carsome - Your Trusted Car Selling Partner'); // Replace with the expected title
      //cy.get('h1').should('contain.text', 'Welcome to Carsome'); // Replace with an element selector and expected text
  
      // Additional assertions or actions as needed
      // ...
  
      // Example: Clicking on a navigation link to another page
      cy.get('.nav-link').contains('About Us').click();
  
      // Assertion for the new page
      cy.url().should('include', '/about'); // Replace with the expected URL endpoint for the About Us page
      cy.title().should('eq', 'Carsome - About Us'); // Replace with the expected title for the About Us page
    });
  });
  