describe('Carsome Application - Home Page Navigation', () => {
  it('should navigate to the home page successfully and perform a search', () => {
    // Visit the home page URL
    cy.visit('https://www.carsome.my');

    // Assertions to verify the home page elements
    cy.title().should('eq', 'CARSOME - #1 Online Used Cars Buying & Selling Platform');
    cy.url().should('eq', 'https://www.carsome.my/', { timeout: 10000, retry: 3 });
    cy.get('h1').should('contain.text', ' CARSOME Service Center Get up to RM1,500* OFF any carSign Up/Login');

    // Perform a search
    const searchQuery = 'Honda CITY';
    cy.get('#input-31').type(searchQuery);
    cy.wait(1000);
    cy.get('.v-list-item__title').click();
    // Assuming you've landed on the page and the popup is present

    // Check if the popup exists
    cy.get('.location-model-box__head-close').should('exist').then(($button) => {
      // If the popup is present, close it
      if ($button.length > 0) {
        cy.get('.location-model-box__head-close').click();
      } else {
        // Handle the case where the popup is not present
        // You can add assertions or other actions as needed
        cy.log('Popup not present');
      }
    });

    // Check if it landed in the expected page 
    cy.get('.filter__btn-list__item--QuickFilter > .filter__btn').should('be.visible');

    // Get the element containing the total count
    cy.get('.list-card__header__total').then((ResultsElement) => {
      const Resultstext = ResultsElement.text();
      const numericResult = Resultstext.match(/\d+/); // Extracts all digits from the string
      const x = parseInt(numericResult[0]); // Convert the first match (131 in this case) to an integer
      cy.log(`The value of the element is: ${x}`);

      // Check if x is greater than or equal to 24
      if (x >= 24) {
        for (let i = 1; i <= 6; i++) {
          cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`).should('be.visible');
        }
      } else {
        for (let i = 1; i <= x; i++) {
          cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`).should('be.visible');
        }
      }
    }
    });
  });
  it('should navigate to page 2 and perform the same verification', () => {
    // Visit page 2 URL
    cy.visit('https://www.carsome.my/buy-car/honda/city?pageNo=2');

    // Assertions to verify page 2 elements
    // Add assertions specific to page 2 if needed
    // Check if the popup exists
    cy.get('.location-model-box__head-close').should('exist').then(($button) => {
      // If the popup is present, close it
      if ($button.length > 0) {
        cy.get('.location-model-box__head-close').click();
      } else {
        // Handle the case where the popup is not present
        // You can add assertions or other actions as needed
        cy.log('Popup not present');
      }
    });


    // Get the element containing the total count on page 2
    cy.get('.list-card__header__total').then((ResultsElement) => {
      const Resultstext = ResultsElement.text();
      const numericResult = Resultstext.match(/\d+/); // Extracts all digits from the string
      const x = parseInt(numericResult[0]); // Convert the first match (131 in this case) to an integer
      cy.log(`The value of the element on page 2 is: ${x}`);

      // Check if x is greater than or equal to 24 on page 2
      if (x >= 24) {
        for (let i = 1; i <= 24; i++) {
          cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`).should('be.visible');
        }
      } else {
        y=x-24
        for (let i = 1; i <= y; i++) {
          cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__title > :nth-child(3)').shouldc(be.visible)  
        }
      }
    });
  });
});
