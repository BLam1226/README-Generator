const licenses = {
  mit: {
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "(https://opensource.org/licenses/MIT)",
    section:
      "This project is licensed under the MIT License. Click the License Badge for details.",
  },
  apache: {
    badge:
      "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    link: "(https://opensource.org/licenses/Apache-2.0)",
    section:
      "This project is licensed under the Apache License 2.0. Click the License Badge for details.",
  },
  gpl: {
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "(https://www.gnu.org/licenses/gpl-3.0)",
    section:
      "This project is licensed under the GNU General Public License v3.0. Click the License Badge for details.",
  },
  isc: {
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
    link: "(https://opensource.org/licenses/ISC)",
    section:
      "This project is licensed under the ISC License. Click the License Badge for details.",
  },
  unlicensed: {
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
    link: "(http://unlicense.org/)",
    section:
      "This project is unlicensed, released to the public domain. Click the License Badge for details.",
  },
  other: {
    badge: "",
    link: "",
    section:
      "This project is under a custom license. Please refer to the project documentation or repository for details on the license terms.",
  },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenses[license]) {
    return licenses[license].badge;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenses[license]) {
    return licenses[license].link;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenses[license]) {
    return licenses[license].section;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadgeURL = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `
# ${answers.projectTitle}

## Description 
  ${answers.description}

## Table of Contents
* [Project-Title](#project-title)
* [Project-Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
1. ${answers.installation}
2. ${answers.dependencies}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
  ${answers.tests}

## License
${licenseSection}

${licenseBadgeURL}${licenseLink}

## Questions
  GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
