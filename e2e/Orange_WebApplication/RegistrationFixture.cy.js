describe('Register users', function() {
    before(() => 
    {
      cy.fixture('user1').then(function(data){
           this.data=data
      }) 
    })
    it('Register vaid users', function()
    {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.contains("New user? Signup").click()
       // cy.wait(2000)
        cy.get('.submit-btn').should("be.disabled")
        cy.get('#name').type(this.data.name)
        cy.get('#email').type(this.data.email)
        cy.get('#password').type(this.data.password)
        //cy.get("input[type='checkbox']").click({multiple:true})
        cy.get("input[type='checkbox']").first().click()
        cy.get("input[type='checkbox']").eq(3).click()
        cy.get("input[type='checkbox']").last().click()
        cy.get(':nth-child(2) > #gender').click()
        cy.get('#state').select(this.data.StateName).should("have.value",this.data.StateName)
        cy.get('.submit-btn').should("be.enabled")
        cy.get('.submit-btn').click()

        //cy.contains("").click()
       // cy.get('#email').type("sampleusertesting1@gmail.com")
       // cy.get('#password').type("Test@1234")
       // cy.get('.submit-btn').click()
        //cy.contains("Sign out").click()

        //verify 4 social icon should be present
        //verify all links are working


    })
})