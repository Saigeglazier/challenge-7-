
// TODO: Create a function that returns a license badge based on which license is passed
// If a license is selected Sheilds.io will generate a badge. If there is no license, an empty string will return

function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(
    license
  )}-blue.svg)`;
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'None') return '';
  const links = {
    MIT: 'https://opensource.org/licenses/MIT',
   'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    MPL: 'https://www.mozilla.org/en-US/MPL/',

  };
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
// Main function to generate markdown content for the README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions or comments you can find me at:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}


export default generateMarkdown;


