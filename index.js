const inquirer = require('inquirer');
const fs = require('fs')

const Circle = require('./lib/Circle.js')
const Rectangle = require('./lib/Rectangle.js')
const Triangle = require('./lib/Triangle.js')
// && input.val == /^[a-zA-Z]$/

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What letters do you want to use? (Max 3)',
        validate: function(input){
            if(input.length < 4){
                return true
            } else {
                return '3 Letters Only'
            }
            
        }
    },
    {
        type: 'input',
        name:'textColor',
        message:'What color do you want the text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want to use?',
        choices: [
            'Circle',
            'Triangle',
            'Rectangle',
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',

    }
]  


inquirer.prompt(questions).then(answers => {
    JSON.stringify(answers, null, 2)
    createSVG(answers)
});

function createSVG(answers) {
    if(answers.shape === 'Circle'){
       const newCircle = new Circle(answers.text, answers.textColor, answers.shapeColor).render()
       fs.writeFile('./logo.svg', newCircle, (err) => {
            if(err){
                console.log('Could not write file')
            } else {
                console.log('Write Successful')
            }
       }
       )
    } else if (answers.shape === 'Triangle'){
        const newTriangle = new Triangle(answers.text, answers.textColor, answers.shapeCholor).render()
        fs.writeFile('./logo.svg', newTriangle, (err) => {
            if(err){
                console.log('Could not write file')
            } else {
                console.log('Write Successful')
            }
        })
    } else if (answers.shape === 'Rectangle'){
        const newRectangle = new Rectangle(answers.text, answers.textColor, answers.shapeColor).render()
        fs.writeFile('./logo.svg', newRectangle, (err) => {
            if(err){
                console.log('Could not write file')
            } else {
                console.log('Write Successful')
            }
        })

    } else {
        console.log('Unknown issue occured in shape selection')
    }
}

