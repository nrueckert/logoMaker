const Triangle = require('./Triangle.js')
const Rectangle = require('./Rectangle.js')
const Circle = require('./Circle.js')

describe('logoMaker', () => {
    
    describe('Triangle', () => {
        it('Should create a triangle logo based off user input', () => {
            const shape = new Triangle('WOO', 'green', 'blue').render();
            expect(shape).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 -125,375 450,400" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">WOO</text> 
            </svg>`);
        });
    });

    describe('Rectangle', () => {
        it('Should create a rectangle logo based off user input', () => {
            const shape = new Rectangle('YEZ', 'grey', 'yellow').render()
            expect(shape).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="250" height="250" fill="yellow"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="grey">YEZ</text> 
            </svg>`)
        });
    });

    describe('Circle', () => {
        it('Should create a circle logo based off user input', () => {
            const shape = new Circle('LEL', 'red', 'purple').render()
            expect(shape).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="125" r="80" fill="purple"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">LEL</text> </svg>`);
        })
    })
})