/// <reference types= "cypress" />

describe('My second testcase', () =>{

    it('Place an order', function(){

 //check boxes
 cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
 cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
 cy.get('input[type=checkbox]').check(['option2','option3'])

 //Static dropdown
 cy.get('select').select('option2').should('have.value','option2')

 //Dynamic dropdowns 1
 cy.get('#autocomplete').type('ind')
 cy.get('.ui-menu-item div').each(($e1, index, $list) => {

        if($e1.text()==="India") 
        {
            $e1.click();
        }
    
    })

    cy.get('#autocomplete').should('have.value','India')
//Dynamic dropdowns 2
    cy.get('#autocomplete')
            .type('in')
        cy.get('.ui-menu-item-wrapper')
            .contains("Dominica")
            .click()

         // text displayed   
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('[value=radio2]').click()


    




 })//it

})// describe
    
