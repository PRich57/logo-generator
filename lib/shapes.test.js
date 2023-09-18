// Constructor Arithmetic is imported.
const {Circle, Square, Triangle} = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('shapes testing suite', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('testing Square class', () => {
    it('render method produces proper template', () => {
      // Arrange step - Where you setup variables for your test
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${shapeColor}'/><text x="145" y="95" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Act step - execute code
      const shapeSquare = new Square(textColor, shapeColor, text); // This is going to create a new object and store in variable 'arithmetic'

      // Assert - expect is a Jest method
      expect(shapeSquare.render()).toEqual(testTemplate); // Use the arithmetic object, finds the prototype sum method, executes, checks that the arguments passed into the function return a value equal to the Arrange step variable and returns a boolean value
    });
  });

  describe('testing Triangle class', () => {
    it('render method produces proper template', () => {
      // Arrange step - Where you setup variables for your test
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="117" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Act step - execute code
      const shapeTriangle = new Triangle(textColor, shapeColor, text); // This is going to create a new object and store in variable 'arithmetic'

      // Assert - expect is a Jest method
      expect(shapeTriangle.render()).toEqual(testTemplate); // Use the arithmetic object, finds the prototype sum method, executes, checks that the arguments passed into the function return a value equal to the Arrange step variable and returns a boolean value
    });
  });
  describe('testing Circle class', () => {
    it('render method produces proper template', () => {
      // Arrange step - Where you setup variables for your test
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="117" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Act step - execute code
      const shapeCircle = new Circle(textColor, shapeColor, text); // This is going to create a new object and store in variable 'arithmetic'

      // Assert - expect is a Jest method
      expect(shapeCircle.render()).toEqual(testTemplate); // Use the arithmetic object, finds the prototype sum method, executes, checks that the arguments passed into the function return a value equal to the Arrange step variable and returns a boolean value
    });
  });

  
});