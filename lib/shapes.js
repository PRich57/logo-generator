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
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="117" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}
class Square extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
  }

  render() {
    return `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${this.shapeColor}'/><text x="145" y="95" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}
class Triangle extends Shapes {
  constructor(textColor, shapeColor, text) {
    super(textColor, shapeColor, text)
  }

  render() {
    return `<svg width='300' height='200'><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="148" y="157" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}


module.exports = {
  Circle,
  Square,
  Triangle
}