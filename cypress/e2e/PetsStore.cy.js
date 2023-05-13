describe('Home page', 

() =>{

    beforeEach(()=>{
        cy.visit("http://34.141.58.52:8080/#/")
        cy.get('a[href*="register"]').click()
    })

    context("Registration scren", () =>{


    it('Open Registration page', () =>{
        cy.getByClass("p-fieldset-legend-text").should('contain', "Registration")
        if (cy.contains("Registration")){
            cy.log("Element 'Registration' found successfully!");
        } else {
            cy.log("Element 'Registration' NOT found!");
        }
    })

    it('Registration with valid email', () =>{
        cy.task('generateRandomEmail').then((email) => {
        const menuBarSelector = '[class="p-menubar p-component"]';
        Cypress.env('email', email);
        cy.getById("login").type(email)
        cy.getById("password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.getById("confirm_password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.contains('Submit').click()
        cy.contains("Quit").should("exist")
        cy.url().should('include', 'profile')
        cy.contains("Quit").click()
        })
    })


    it('Registration with NOT valid email', () =>{
        const menuBarSelector = '[class="p-menubar p-component"]';
        cy.getById("login").type("cypresstest2")
        cy.getById("password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.getById("confirm_password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.contains('Submit').click()
        cy.contains("Quit").should("not.exist")
        cy.getByClass("text-red-500").should('be.visible')

    })

    it('Registration with existed Email', () =>{
        const menuBarSelector = '[class="p-menubar p-component"]';
        cy.getById("login").type("cypresstest2@test.com")
        cy.getById("password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.getById("confirm_password").type("qwerty123")
        cy.get(menuBarSelector).click()
        cy.contains('Submit').click()
        cy.contains("Quit").should("not.exist")
        cy.getByClass("p-message-text").should('be.visible')

    })
})
})