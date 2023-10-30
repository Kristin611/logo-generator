const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const {Circle, Triangle, Square} = require('./lib/shapes')

//create function to write SVG file
    function writeToFile(fileName, data) {
        fs.writeFileSync(path.join(fileName), data)
    }

//create starter function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Provide 1-3 characters of text that you would like to see on your logo.',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?',
            name: 'color'
        },
        {
            type: 'list',
            message: 'Pick a shape for your logo.',
            name: 'shape',
            choices: [
                'circle',
                'triangle',
                'square'
            ]
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'background'
        }
        ])
        .then((responses) => {
            const text = responses.text;
            const color = responses.color;
            const shape = responses.shape;
            const background = responses.background;
            console.log({...responses})

            let shapeChoice;
            switch(responses.shape) {
                case 'circle': 
                shapeChoice = new Circle(responses.text, responses.color, responses.background)
                break;
                case 'triangle':
                shapeChoice = new Triangle(responses.text, responses.color, responses.background)
                break;  
                case 'square':
                shapeChoice = new Square(responses.text, responses.color, responses.background)      
                 
            }

            writeToFile('examples/logo.svg', shapeChoice.render())

        })
}

init(); //function call to initialize app


