/// <reference types= "cypress" />
/// <reference types= "cypress-iframe" />
import 'cypress-iframe'


describe('My second testcase', () =>{

    it('Place an order', function(){

 //check boxes
 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
/*cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }

})*/

/*cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('include','top')*/

/*cy.get('#opentab').then(function(x)
 {
   const url= x.prop('href')
   cy.log(url)
   cy.visit(url)

 })*/

cy.frameLoaded('#courses-iframe')
cy.iframe().find('[href=mentorship]').eq(0).click()
//cy.iframe().find('[class='pricing-title text-white ls-1']').should('have.length',2)





})//it

})// describe