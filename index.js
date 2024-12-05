// TODO: Include packages needed for this application

import fs from 'fs'; //file system module to write files
import inquirer from 'inquirer'; //to collect user inputs
import generateMarkdown from './generateMarkdown.js'; 
import licenseUtils from './licenseUtils.js';


// TODO: Create an array of questions for user input

const questions = [

  {
        type: 'input', // type of input 
        name: 'title', // key for storing responses
        message: 'What is your project title?', // message displayed to user
    },
    {
        type:'input',  
        name: 'description',
        message: 'What is a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the install instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage information:',
    },
    {
        type: 'list', // this will show a list of choices
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL MPL', 'None'], // list of options
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
 ];
// TODO: Create a function to write README file
// fileName is the name of the file being created in this case fileName = README.md
// data = what is written into the file
// fs.writeFile saves the content written in the file, if there's an error it logs it

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md generated successfully!')
    );
  }
  
// TODO: Create a function to initialize app
// init calls inquirer.prompt() WITH the questions array

  function init() {
    inquirer.prompt(questions).then((responses) => {
      const markdown = generateMarkdown(responses);
      writeToFile('README.md', markdown);
    });
  }
  
// Function call to initialize app

  init();


