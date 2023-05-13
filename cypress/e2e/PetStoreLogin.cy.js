describe('Login functionality', () =>{
    const email = Cypress.env('randomEmail'); // Retrieve the stored email


    beforeEach(()=>{
        cy.visit("http://34.141.58.52:8080/#/")
        cy.contains("Login").click()
    })

    context("Login scren", () =>{
        it('Login with valid credentials', () =>{
            cy.task('setRandomEmail').then((email) => {
            const menuBarSelector = '[class="p-menubar p-component"]';
            //getting email from registration
            Cypress.env('email', email)
            const loginField = '[class="p-inputtext p-component w-full"]'
            //comment for testing perpuses
            //cy.get(loginField).type(email) 
            cy.get(loginField).type("kate+220513@yopmail.com")
            cy.get('[class="p-inputtext p-component"]').type("qwerty123")
            cy.get(menuBarSelector).click()
            cy.contains("Submit").click()
            cy.url().should('include', 'profile')
            
        })
        })

        it('Login with invalid Email', () =>{
            
            const menuBarSelector = '[class="p-menubar p-component"]';
            const loginField = '[class="p-inputtext p-component w-full"]'
            //comment for testing perpuses
            cy.get(loginField).type("kate")
            cy.get('[class="p-inputtext p-component"]').type("qwerty123")
            cy.get(menuBarSelector).click()
            cy.contains("Submit").click()
            cy.contains("This field is email").should('be.visible')
            
        })

        it('Login with invalid Password', () =>{
            
            const menuBarSelector = '[class="p-menubar p-component"]';
            const loginField = '[class="p-inputtext p-component w-full"]'
            //comment for testing perpuses
            cy.get(loginField).type("kate+220513@yopmail.com")
            cy.get('[class="p-inputtext p-component"]').type("qwerty1")
            cy.get(menuBarSelector).click()
            cy.contains("Submit").click()
            cy.contains("Something went wrong").should('be.visible')
            
        })

        it('Login with unexisted Email', () =>{
            const menuBarSelector = '[class="p-menubar p-component"]';
            const loginField = '[class="p-inputtext p-component w-full"]'
            cy.get(loginField).type("kate+2205133@yopmail.com")
            cy.get('[class="p-inputtext p-component"]').type("qwerty123")
            cy.get(menuBarSelector).click()
            cy.contains("Submit").click()
            cy.contains("Something went wrong").should('be.visible')
            
            
        })

        it('Login with invalid pair Login - Password', () =>{
            
            const menuBarSelector = '[class="p-menubar p-component"]';
            const loginField = '[class="p-inputtext p-component w-full"]'
            cy.get(loginField).type("kate+220513@yopmail.com")
            cy.get('[class="p-inputtext p-component"]').type("qwerty12")
            cy.get(menuBarSelector).click()
            cy.contains("Submit").click()
            cy.contains("Something went wrong").should('be.visible')
            
        })

        it('Login with empty Login', () =>{
            
            
            
        })
    
    })
})