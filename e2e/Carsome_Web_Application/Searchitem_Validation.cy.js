it('Should check if car details page exists or car does not exist', () => {
    // Navigate to the page with the car details (replace 'your_url' with the actual URL)
    cy.visit('https://www.carsome.my/buy-car?keywords=Honda%20City');

    // Check if the popup exists and close it if present
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

    // Use 'should' with 'or' to check for the existence of either the car details page or the "car not found" message
    cy.get('.list-card__header__total, .no-card__title').should('exist').then(() => {
        // Assertions or actions that you want to perform when either of the elements exists
        cy.log('Either car details page or "car not found" message exists');


        //in If else format

            // Use 'should' with 'or' to check for the existence of either the car details page or the "car not found" message
    cy.get('.list-card__header__total, .no-card__title').should('exist').then(($elements) => {
        // If either of the elements exists, perform the following assertions or actions
        if ($elements.filter('.list-card__header__total').length > 0) {
            // Assertions or actions for the car details page
            cy.log('Car details page exists');
            // Add more assertions if needed
        } else if ($elements.filter('.no-card__title').length > 0) {
            // Assertions or actions for the "car not found" message
            cy.log('Car not found, no content page exists');
            // Add more assertions if needed
        } else {
            // Handle other cases or add additional assertions if needed
            cy.log('Unexpected state - Neither car details page nor "car not found" message exists');
        }
    });
});
});

