// Create Parent class called Shapes for properties to be inherited by each shape
class Shapes {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }
}

class Circle extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
  }

  render() {
    return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="148" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Square extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
  }

  render() {
    return `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${this.shapeColor}'/><text x="144" y="94" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Triangle extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
  }

  render() {
    return `<svg width='300' height='200'><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="149" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

// Export object of shapes that are required for testing
module.exports = {
  Circle,
  Square,
  Triangle
}