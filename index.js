const inquirer = require('inquirer');
const fs = require('fs');
const { Square,Circle, Triangle,renderShape} = require('./lib/shapes');
const colorName = require('color-name-list');


const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter a maximum of three characters text",
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter desired text color",
    },

    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Square", "Circle", "Triangle"],
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Enter desired shape color",
    }
    
]

function writeToFile(svgFile, data){
    let logoContent = renderShape(data);
    fs.writeFile(svgFile, logoContent, (err) => {
        err ? console.log(err) : console.log("Successfuly created SVG file");
    })
    
}

function writeToAnotherFile(HTMLFile, data){
    let logoContent = renderShape(data);
    fs.writeFile(HTMLFile, logoContent, (err) => {
        err ? console.log(err) : console.log("Successfuly created SVG file");
    })
}

function init1() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("logo.svg",answers);
        writeToAnotherFile("index.html",answers);
    })
}



init1();
