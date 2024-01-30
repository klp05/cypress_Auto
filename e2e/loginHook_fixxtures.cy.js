describe('Login user', function() {
    before(() => {
        
        cy.fixture('user1').then(function(data){
            this.data=data
            cy.login(this.data.email,this.data.password)
       });
       // Log in before running the test
       

      });
    it(' vaid user Login', function()
    {     
        cy.url().should('eq', 'https://ineuron-courses.vercel.app/'); 
        cy.get('.nav-menu-item').should('be.visible')
    });
    after(() => {
        // Log out after the test
        cy.logout();
        cy.get('.header').should("be.visible")//going back to sign in page with sign in header visible or not
    })

})