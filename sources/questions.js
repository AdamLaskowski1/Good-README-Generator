const inquirer = require("inquirer");

const license = ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 3-clause", "Creative Commons", "GNU General Public License", "ISC", "MIT", "Mozilla Public License 2.0"];

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?"
      },
      {
        type: "input",
        name: "userName",
        message: "What is your full name?"
      },
      {
        type: "input",
        name: "application",
        message: "Provide a link to your deployable application"
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
      },
      {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any"
      },
      {
        type: "list",
        message: "Choose a license for the project",
        name: "license",
        choices: license
      }
    ]);
  }

module.exports = {
    promptUser
}
