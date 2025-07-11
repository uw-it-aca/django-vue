// lighthouserc.cjs

require("dotenv").config();
const port = process.env.RUNSERVER_PORT;

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        //set which categories you want to run here.
        onlyCategories: ["accessibility"],
      },
      url: [
        `http://localhost:${port}/`,
        `http://localhost:${port}/customize`,

        // Add more URLs as needed
      ],
      // You can also specify other options like numberOfRuns, staticDistDir, etc.
    },
    // Add assert, upload, and other configuration as required
  },
};
