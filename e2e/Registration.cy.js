describe('Register users', function() {
    before(() => {
        
        cy.fixture('user1').then(function(data){
            this.data=data
       });
       // Log in before running the test
       cy.login(this.data.email,this.data.password)

      });
    it('Register vaid users', function()
    {
       // cy.visit("https://ineuron-courses.vercel.app/login")
        //cy.contains("New user? Signup").click()
       // cy.get('.submit-btn').should("be.disabled")
       // cy.get('#name').type("sampleuserfortesting")
        //cy.get('#email').type("sampleusertesting@gmail.com")
      //  cy.get('#password').type("Test@1234")
        //cy.get("input[type='checkbox']").click({multiple:true})
        cy.get("input[type='checkbox']").first().click()
        cy.get("input[type='checkbox']").eq(3).click()
        cy.get("input[type='checkbox']").last().click()
        cy.get(':nth-child(2) > #gender').click()
        cy.get('#state').select("Gujarat").should("have.value","Gujarat")
        cy.get('.submit-btn').should("be.enabled")
        cy.get('.submit-btn').click()
         

    });
    after(() => {
        // Log out after the test
        cy.logout();
    })
})