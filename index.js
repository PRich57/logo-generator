const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: `Enter up to 3 characters to be displayed in the logo:`,
    name: 'text',
  },
  {
    type: 'input',
    message: 'Enter your desired text color by color name or hexadecimal number:',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Choose your desired shape:',
    choices: ['Circle', 'Triangle', 'Square'],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Enter your desired shape color by color name or hexadecimal number:',
    name: 'shapeColor',
  }
];

// Create a function to render SVG
function renderSVG(filename, {text, textColor, shapeColor, shape}){
  // Create a variable called myLogo and set it equal to the value of a new object created from selected shape and its properties
  const myLogo = new shapes[shape](textColor, shapeColor, text)
  // Use fs to write new file containing rendered SVG
  fs.writeFile(filename, myLogo.render(), (err) => {
    err ? console.error(err) : console.log(`Generated logo.svg`)
  })
}

// Create a function to initialize app
function init(){
  // Use inquirer to prompt questions array and collect user input
  inquirer
    .prompt(questions)
    .then((data) => {
      // Validation - don't accept more than 3 characters
      if(data.text.length > 3) {
        return console.error("Incorrect Usage: You may enter a maximum of 3 characters for your logo. Please try again.");
      }
      renderSVG('logo.svg', data)
    })
}

// Function call to initialize app
init();