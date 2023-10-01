const inquirer = require('inquirer');
const Triangle = require('./lib/shapes')
const fs = require('fs')
// && input.val == /^[a-zA-Z]$/

const questions = [
    {
        type: "input",
        name: "text",
        message: "What letters do you want to use? (Max 3)",
        validate: function(input){
            if(input.length < 4){
                return true
            } else {
                return "3 Letters Only"
            }
            
        }
    },
    {
        type: "input",
        name:"textColor",
        message:"What color do you want the text to be?"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want to use?",
        choices: [
            "Triangle",
            "Circle",
            "Rectangle",
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want the shape to be?",

    }
]  


inquirer.prompt(questions).then(answers => {
    JSON.stringify(answers, null, 2)
    createSVG(answers)
});

function createSVG(answers) {
    if(answers.shape == 'Triangle'){
       Triangle.shapeColor = answers.shapeColor
       Triangle.text = answers.text
       Triangle.textColor = answers.textColor
    }
}
