const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    "video": false,
    "baseUrl": "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


});

