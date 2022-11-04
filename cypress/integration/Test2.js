/// <reference types= "cypress" />

describe('My second testcase', () =>{

    it('Place an order', function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get(':nth-child(14)').click()   
})

})