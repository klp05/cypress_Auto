describe("My first login test", ()=>{

    it("login with valid credentials",()=>
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/")
      // cy.viewport('iphone-6')
       cy.title().should("contain","Orange1")
       cy.title().should("eq","OrangeHRM")
       cy.url().should("contain","demo")
      // cy.get('[name="username"]').type('Admin');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').should('have.value',"Admin")
      cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123').should('have.value',"admin123")
      //add assertion that button should be enabled
       cy.get('.oxd-button').should('be.enabled')
      //cy.get(':nth-child(7) > .oxd-main-menu-item').click()

      //you need to add assertion using title or using url
        cy.title().should("eq","OrangeHRM")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    })

    it("login your password",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.contains("Forgot your password?").click()
     })
});
