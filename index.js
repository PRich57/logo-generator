const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: `Enter up to 3 characters to be displayed in the logo.`,
    name: 'characters',
  },
  {
    type: 'input',
    message: 'Enter your desired text color by color name or hexadecimal number',
    name: 'text-color',
  },
  {
    type: 'list',
    message: 'Choose your desired shape',
    choices: ['Circle', 'Triangle', 'Square'],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Enter your desired shape color by color name or hexadecimal number',
    name: 'shape-color',
  }
];

// Create a function to render SVG
function renderSVG(filename, data){
  const myLogo = generateLogo(data)
  fs.writeFile(filename, myLogo, (err) => {
    err ? console.error(err) : console.log(`Generated logo.svg`)
  })
}

// Create a function to initialize app
function init(){
  inquirer
    .createPromptModule(questions)
    .then((data) => {
      renderSVG('logo.svg', data)
    })
}

// Function call to initialize app
init();