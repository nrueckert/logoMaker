class Triangle{
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 -125,375 450,400" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
            </svg>`
    }
}

module.exports = Triangle