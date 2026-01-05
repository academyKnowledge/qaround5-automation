const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    // specPattern: "**/*.feature",
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/",
    // viewportWidth: 500 ,
    // viewportHeight : 500, 
    screenshotOnRunFailure : false,
    screenshotsFolder:"My Screenshots",
    trashAssetsBeforeRuns:true,
    video:false,
    videosFolder:"My Videos",
    videoCompression:30,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
  }
  },
});
