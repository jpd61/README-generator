// Generate the Readme function
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} 👋</h1>

## Description
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Author](#author)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}<br />
${answers.username}:<br />
✉️ Email me with any questions: ${answers.email}<br />
<img src="${answers.avatar_url}"/><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
    `;
  }
  
  module.exports = generateReadme;