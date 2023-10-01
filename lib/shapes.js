class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}
    
class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor, shapeColor)
    }
    render() {
    
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="125" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`;
    }
}   

class Rectangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="250" height="250" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
            </svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 -125,375 450,400" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>`
    }
}
module.exports = Circle
module.exports = Rectangle
module.exports = Triangle