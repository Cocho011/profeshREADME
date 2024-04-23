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
  ${renderLicenseBadge(data.license)}

## Description 📝
${data.description}

## Table of Contents 🗒
1. [Installations](#installations-💻)
2. [Usage](#usage-🏆)
3. [Dependencies](#dependencies-📥)
4. [Walkthrough](#walkthrough-🎥)
5. [Test](#tests-🧪)
6. [Questions](#questions- ❓) 
7. [Contributors](#contributor(s)-😃)

## Installation 💻
${data.installation}

## Usage 🏆
${data.usage}

## Dependencies 📥
${data.dependencies}

## Walkthrough 🎥
$(data.walkthrough)

## Contributing 🤝
${data.contributing}

## Tests 🧪
${data.tests}

## Contributor(s) 😃
${data.contributors}

## License 📜
${data.license}

For more information regarding this license please visit: ${renderLicenseLink(data.license)}

## Questions
For questions or concerns about this project, please contact me at: 
- ${data.github} 
- Email at ${data.email}
- GitHub UserName: ${data.username},
- GitHub Profile: ${data.profile},

`;
}

module.exports = generateMarkdown;
