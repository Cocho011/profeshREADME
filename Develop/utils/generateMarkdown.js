// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license !== "None") {
    return ""; // Return empty string if there is no license
  }
  return ""; // Return empty string if there is no license
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license !== "None") {
    return ""; // Return empty string if there is no license
  }
  return ""; // Return empty string if there is no license
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
  } else if (license !== "None") {
    return ""; // Return empty string if there is no license
  }
  return ""; // Return empty string if there is no license
}

function generateMarkdown(data) {
  return `# ${data.title}
  $)renderLicenseBadge(data.license)}

## Description 📝
${data.description}

## Table of Contents 🗒

* [Installations](#installations-💻)

* [Usage](#usage-🏆)

* [Test](#tests-🧪)

* [Contributors](#contributors-😃)

* [Questions](#questions)

${renderLicenseLink(data.license)}

## Installation 💻
${data.installation}

## Usage 🏆
${data.usage}

## License 
${data.license}

## Dependencies
${data.dependencies}

## Contributing
${data.contributing}

## Tests 🧪
${data.tests}

## Contributors 😃
${data.contributors}


## Questions
For questions or concerns about this project, please contact me at ${data.github} or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;