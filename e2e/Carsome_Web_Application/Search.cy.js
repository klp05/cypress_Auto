// cypress/integration/home_page_spec.js

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
       //check if it landed in the expected page 
    cy.get('.filter__btn-list__item--QuickFilter > .filter__btn').should('be.visible')
    
     //check if it landed has all required car details by checking one car details

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__title > :nth-child(2)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__title > :nth-child(3)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__car-other > :nth-child(1)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__car-other > :nth-child(2)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-car-tagging > .car-tag').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-card__price > .mod-card__price__total > strong').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-card__price > .mod-tooltipMonthPay > .d-flex > :nth-child(1)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .mod-b-card__mask-content > :nth-child(1)').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__footer > .mod-b-card__title > .favorite-icon').should('be.visible')

    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .mod-b-card__swiper__number > .mod-b-card__swiper__number__total').should('be.visible')
    //to check if there are 20 car listings available in the page
    cy.get(':nth-child(1) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active').should('be.visible')
   // cy.get('.v-pagination').scrollIntoView();
    for (let i = 1; i <= 10; i++) {
      cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`)
          .should('be.visible');
  
      cy.log(i, 'visible');
  
      if (i === 6) {
          // Pause for 2 seconds
          cy.wait(2000);
  
          // Simulate moving the mouse downwards by 5cm
          cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`)
              .trigger('mousedown', { clientY: 0 })
              .trigger('mousemove', { clientY: 500 })
              .trigger('mouseup');
      }
  }
  
  
});



  });
});
