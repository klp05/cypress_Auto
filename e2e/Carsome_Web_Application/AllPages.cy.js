describe('Carsome Application - Home Page Navigation', () => {
    it('should navigate to the home page successfully and perform a search', () => {
        // Visit the home page URL
        cy.visit('https://www.carsome.my');

        // Assertions to verify the home page elements
        cy.title().should('eq', 'CARSOME - #1 Online Used Cars Buying & Selling Platform');
        cy.url().should('eq', 'https://www.carsome.my/', { timeout: 10000, retry: 3 });
        cy.get('h1').should('contain.text', ' CARSOME Service Center Get up to RM1,500* OFF any carSign Up/Login');

        // Perform a search
        const searchQuery = 'proton Iriz';//'Honda CITY';
        cy.get('#input-31').type(searchQuery);
        cy.wait(1000);
        cy.get('.v-list-item__title').click();

        // Check if the popup exists and close it if present
        cy.get('.location-model-box__head-close').should('exist').click();

        // Check if it landed in the expected page 
        cy.get('.filter__btn-list__item--QuickFilter > .filter__btn').should('be.visible');

        // Get the total count of results
        cy.get('.list-card__header__total').then((ResultsElement) => {
            const Resultstext = ResultsElement.text();
            const numericResult = Resultstext.match(/\d+/); // Extracts all digits from the string
            const totalResults = parseInt(numericResult[0]); // Convert the first match to an integer

            // Calculate the number of pages
            const totalPages = Math.ceil(totalResults / 24);
            const remainingResults = totalResults % 24;

            // Loop through each page except the last one
            for (let currentPage = 1; currentPage <= totalPages - 1; currentPage++) {
                // Click pagination to navigate to the current page
                if (currentPage > 1) {
                    cy.get(`:nth-child(${currentPage}) > .v-pagination__item`).click();
                }

                // Assert details in the current page
                for (let i = 1; i <= 6; i++) {
                    cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`).should('be.visible');
                }
            }

            // Loop for the last page if there's a remainder
            if (remainingResults > 0) {
                // Click pagination to navigate to the last page
                cy.get(`:nth-child(${totalPages}) > .v-pagination__item`).click();

                // Assert details in the last page
                for (let i = 1; i <= remainingResults; i++) {
                    cy.log(`Checking element ${i} on the last page`);
                    cy.get(`:nth-child(${i}) > [item="[object Object]"] > .mod-b-card > .mod-b-card__header > .swiper-container > .swiper-wrapper > .swiper-slide-active`).should('be.visible');
                }
            }
        });
    });
});
