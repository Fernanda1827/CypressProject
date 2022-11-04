/// <reference types= "cypress" />

describe('My second testcase', () =>{

    it('Place an order', function(){

 //check boxes
 /*cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
 cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
 cy.get('input[type=checkbox]').check(['option2','option3'])*/

 //Static dropdown
 //cy.get('select').select('option2').should('have.value','option2')

///Alerts
 cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 //cy.get('#alertbtn').click
 //cy.get('[value="Confirm"]').click()

//window:alert
/*cy.on('window:alert',(str) =>
    {

        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    }
)

cy.on('window:confirm',(str) =>
    {

        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

    }
)*/

//removeattr is a jquery function called by invoke
cy.get('#opentab').invoke('removeAttr','target').click()
cy.url().should('include','https://www.rahulshettyacademy.com/')
cy.go('back')





})//it

})// describe