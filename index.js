// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user for Github username and project details
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropiate license for this project",
            choices: [
                "Apache",
                "Academic Free License",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open Software",
                "The Unlicense"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a Test included"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 

// Function async Inititing 
  async function init() {
    try {
      const answers = await promptUser();
      const generateContent = generateReadme(answers);
      await writeFileAsync('README.md', generateContent);
  
      console.log('✔️  Successfully wrote to README.md');
    } catch(err) {
      console.log(err);
    }
  }
  
  init();  