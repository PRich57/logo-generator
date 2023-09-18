const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: `Enter up to 3 characters to be displayed in the logo.`,
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter your desired text color by color name or hexadecimal number',
    name: 'textColor',
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
    name: 'shapeColor',
  }
];

// Create a function to render SVG
function renderSVG(filename, {text, textColor, shapeColor, shape}){
  const myLogo = new generateLogo[shape](textColor, shapeColor, text)
  fs.writeFile(filename, myLogo.render(), (err) => {
    err ? console.error(err) : console.log(`Generated logo.svg`)
  })
}

// Create a function to initialize app
function init(){
  inquirer
    .prompt(questions)
    .then((data) => {
      renderSVG('logo.svg', data)
    })
}

// Function call to initialize app
init();