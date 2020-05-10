// Generate the Readme function
function generateReadme(answers) {
    return `
        # README.md_Generator
        Using Node.js, generate a template README.md file with users input to generate the README.
        ${answers.projectTitle}
        
        ## Description    
        ${answers.description}
        
        ## Table of Content
        ${answers.tableOfContents}
        
        ### Installation
        ${answers.installation}
        ### Usage
        ${answers.usage}
        ### Built With
        * [VScode](https://code.visualstudio.com/) - The editor of choice
        * [Notepad++](https://notepad-plus-plus.org/) - My second editor
        * [Gitbash](https://gitforwindows.org/) - What would we do without our bash?
        ### Questions
        ${answers.questions}
        
        ### License${answers.license}
        ### Contributors
        ${answers.contributing}
        ### Acknowledgments
        #### Badges
        [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        
        ### GitHub Username
        ${answers.email}
        ### Avatar Image
        ${answers.avatar_url}
        Copyright 2020 &copy;
    `;
  }
  
  module.exports = generateReadme;