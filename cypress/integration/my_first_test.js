/// <reference types= "cypress" />


it('google test', function()  {

    
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('Automation step by step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()

   // cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()

})

it('login test', function(){
// login
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()

   // organization 
    cy.contains('User Management')
    .click({force:true})
    cy.contains('Users')
    .click({force:true})
    cy.get('#btnAdd').click()
    

   
    
})

it.only('Find cucumber', function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    
    cy.get('.product').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)

    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()


})
