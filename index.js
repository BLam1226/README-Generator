// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Explain how to install your project:",
  },
  {
    type: "input",
    name: "dependencies",
    message: "To install necessary dependencies, run the following command:",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how to use your project:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Explain how others can contribute to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Explain how to run tests (if applicable):",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["mit", "apache", "gpl", "isc", "unlicensed", "other"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README file "${fileName}" successfully created!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
