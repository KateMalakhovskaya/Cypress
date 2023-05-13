const { defineConfig } = require("cypress");
const faker = require("faker");

module.exports = defineConfig({
  e2e: {
      viewportWidth: 1280,
      viewportHeight: 720,
      //run only selected specs
      //specPattern: 'cypress/e2e/allSpecs.cy.js',

    setupNodeEvents(on, config) {

      let loginValue = null
      let petName = null
      on('task', {
        generateRandomEmail() {
          loginValue = faker.internet.email()
          return loginValue
        },
        setRandomEmail(){
          return loginValue
        },

        generateRandomPetName()
        {
          petName = faker.name.findName()
          return petName
        }
      })

    },
  },
  
});

