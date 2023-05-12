const { defineConfig } = require("cypress");
const faker = require("faker");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateRandomEmail() {
          const randomEmail = faker.internet.email();
          return randomEmail;
        },
      })
    },
  },
  
});

