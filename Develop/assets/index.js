// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
}    
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",    
},
{
    type: "input",
    name: "description",
    message: "Provide a brief description of your project.",
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
},
{
    type: "input",
    name: "usage",
    message: "How do you use your project? Provide instructions and examples for use.",
},
{
    type: "input",
    name: "license",
    message: "What license is your project using?",
},
{
    type: "input",
    name: "dependencies",
    message: "Must any dependencies be installed for your project to run?",
},
{
    type: "input",
    name: "contributing",
    message: "What are the guidelines for others to contribute to your project?",
},
{
    type: "input",
    name: "tests",
    message: "How can tests be run for your project?",
},
{
    type: "input",
    name: "contributors",
    message: "Who are the contributors for your project",
}
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(inquireAnswers) => {
        console.log("Generating README...");
        writeToFile("develop/utils/sampleREADME.md", generateMarkdown({ ...inquireAnswers }));
    });
}

// Function call to initialize app
init();
