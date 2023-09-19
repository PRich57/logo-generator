// Constructor Arithmetic is imported.
const {Circle, Square, Triangle} = require('./shapes.js');

// Create a testing suite for Shapes
describe('shapes testing suite', () => {
  // Create a test that checks for render producing proper template
  describe('testing Circle class', () => {
    it('render method produces proper template', () => {
      // Arrange step - Where you setup variables for your test
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="117" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
  
      // Act step - execute code
      const shapeCircle = new Circle(textColor, shapeColor, text); // This is going to create a new object and store in variable 'shapeCircle'
  
      // Assert - expect is a Jest method
      expect(shapeCircle.render()).toEqual(testTemplate); // Use the shapeCircle object, finds the prototype render method, executes, checks that the proper template is created with the render method
    });
  });

  // Repeat above test for the Square class
  describe('testing Square class', () => {
    it('render method produces proper template', () => {
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${shapeColor}'/><text x="145" y="95" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Act step - execute code
      const shapeSquare = new Square(textColor, shapeColor, text); // This is going to create a new object and store in variable 'shapeSquare'

      // Assert
      expect(shapeSquare.render()).toEqual(testTemplate);
    });
  });

  // Repeat above for Triangle class
  describe('testing Triangle class', () => {
    it('render method produces proper template', () => {
      const shapeColor = 'green';
      const textColor = 'white';
      const text = 'svg';
      const testTemplate = `<svg width='300' height='200'><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="148" y="157" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Act step - execute code
      const shapeTriangle = new Triangle(textColor, shapeColor, text); // This is going to create a new object and store in variable 'shapeTriangle'

      // Assert
      expect(shapeTriangle.render()).toEqual(testTemplate);
    });
  });
});