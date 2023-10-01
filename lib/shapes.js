class Triangle {
    constructor(text, textColor, shapeColor){
        let svgElem = document.createElementNS(SVG_NS, "svg");
        let triangle = document.createElementNS(SVG_NS, "triangle");
        let textElem = document.createElementNS(SVG_NS, "text")
        svgElem.setAttribute("width", "300");
        svgElem.setAttribute("height", "200");
        textElem.setAttribute("x", "150")
        textElem.setAttribute("y", "125")
        textElem.setAttribute("text", text)
        textElem.setAttribute("fill", textColor)
        triangle.setAttribute("fill", shapeColor);
        svgElem.appendChild(textElem)
        svgElem.appendChild(triangle);
     
    }
}
class Circle {
    constructor(text, textColor, shapeColor) {
        let svgElem = document.createElementNS(SVG_NS, "svg");
        svgElem.setAttribute("width", "300");
        svgElem.setAttribute("height", "200");
        let circle = document.createElementNS(SVG_NS, "circle")
        let color = shapeColor
        circle.setAttribute("fill", color)
        svgElem.appendChild(circle)
    }
}
module.exports = Triangle