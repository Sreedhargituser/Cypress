const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportWidth: 1100,
    viewportHeight: 550,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
