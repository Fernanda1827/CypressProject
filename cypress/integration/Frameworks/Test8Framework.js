/// <reference types= "cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/Products'

describe('Framework test suite', () =>{

    before(function() {

        cy.fixture('example').then(function(data)
        {

this.data= data

        }) //fixture

    })//before

    it('My first framework', function(){

        const homePage = new HomePage()
        const productPage = new ProductPage()


//cy.visit('https://rahulshettyacademy.com/angularpractice/')
cy.visit(Cypress.env('url')+'/angularpractice/')

homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEntrepreneaur().should('be.disabled')
homePage.getShopTab().click()

this.data.productName.forEach(function(element) {

        cy.selectProduct(element)
    });

    //checkout button
    productPage.checkOutButton().click()

    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($l,index, $list) => {

        //cy.log($l.text())
        const amount= $l.text()
        var res= amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
        
        
    }).then(function(){
        cy.log(sum)
    })

    cy.get('h3 strong').then(function(element){

        const amount = element.text()
        var res= amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })



    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('[type="submit"]').click()
    //cy.get('.alert').should('have.have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    cy.get('.alert').then(function(element)
    {
        const actualText= element.text()
        expect(actualText.includes('Success')).to.be.true
    })

    /* ₹. 50000
        res[0]= ₹.
        res[1]= 50000*/


})//it

})// describe