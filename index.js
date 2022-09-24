const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./source/generateMarkdown');



const questions = () => {
    return inquirer.prompt ([ 
        
        {
            type: "input",
            message: "REAdME heading?",
            name: "heading"
        },
        {
            type: "input",
            message: "whats your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "How does the user need to know about using the repo?",
            name: "usage"
        },
        {
            type: "input",
            message: "what is your full name?",
            name: "name"
        },
        {
            type: "input",
            message: "what is your email address?",
            name: "email"
        },
        {
            type:"input",
            message: "what is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "Please write a short description of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "installation"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What command should be run for testing?",
            name: "tests"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT","APACHE","GPL","BSD","None"]
        }
    ]) 
}; 