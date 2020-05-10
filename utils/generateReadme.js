// Generate the Readme function
function generateReadme(answers) {
    return `
<h1 align="center">Welcome to README-generator 👋</h1>
Using Node.js, generate a template README.md file with users input to generate the README.
${answers.projectTitle}

        
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)
- [Acknowledgments](#Github)
        
## Description    
${answers.description}

### Installation
${answers.installation}

### 🚀 Usage
${answers.usage}

### Questions
${answers.questions}
        
### 📝 License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

### 🤝 Contributors
${answers.contributing}

### Acknowledgments
${answers.acknowledgements}

### GitHub  👤 
${answers.username}:\
${answers.email}
<img src="${answers.avatar_url}"/>\

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator)_
    `;
  }
  
  module.exports = generateReadme;