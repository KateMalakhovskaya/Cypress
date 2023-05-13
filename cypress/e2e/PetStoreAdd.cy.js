const faker = require('faker');

let petData = {
    randomEmail: faker.internet.email(),
    randomAge: faker.random.number({
        'min': 1,
        'max': 16
    })
}


describe('Add Pet', () =>{
    const randomPetName = Cypress.env('randomName'); // Retrieve the stored email


    beforeEach(()=>{
        cy.visit("http://34.141.58.52:8080/#/")
        cy.contains("Login").click()
        cy.get('[class="p-inputtext p-component w-full"]').type("kate+220513@yopmail.com")
        cy.get('[class="p-inputtext p-component"]').type("qwerty123")
        cy.get('[class="p-menubar p-component"]').click()
        cy.contains("Submit").click()
        cy.url().should('include', 'profile')
    })

    context("Add Pet", () =>{


    it('Add pet with valid data', () =>{
        cy.task('generateRandomPetName').then((randomPetName) => {
        const avatar = 'pet.jpeg'
        cy.getByClass("p-button p-component p-button-icon-only p-button-rounded p-button-primary p-button-outlined").click()
        cy.contains("Create you pet profile").should('be.visible')

        Cypress.env('randomPetName', randomPetName)
        cy.getById("name").type(randomPetName)
        cy.getById("age").type(petData.randomAge)
        cy.contains("Select a Type").click()
        cy.contains("dog").click()
        cy.contains("Select a Gender").click()
        cy.contains("Male").click()
        cy.contains("Submit").click()
        cy.url().should('include', 'ava')
        cy.contains("Choose").attachFile(avatar)
        cy.contains("Profile").click()
        cy.contains(randomPetName).click()
        })
        })
    })

    
})