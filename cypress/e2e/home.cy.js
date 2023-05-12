describe('Home page tests', () =>{
    beforeEach(()=>{
        cy.visit("https://www.fronius.com/de-at/austria")
        cy.contains('Allow all (incl.').click()
    })

    it('the h1 contains the correct text', () =>{
        //cy.visit("https://www.fronius.com/de-at/austria")
        cy.get("h1").contains("Get to know us")
        cy.getByData("footer__button__text").eq(0)

    })

    it('the features on the homepage are correct', () =>{
       // cy.visit("https://www.fronius.com/de-at/austria")
        cy.get("li").eq(0).contains("Consent")
    })
})