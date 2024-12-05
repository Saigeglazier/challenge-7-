
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './generateMarkdown.js';

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


export { renderLicenseBadge, renderLicenseLink, renderLicenseSection };
