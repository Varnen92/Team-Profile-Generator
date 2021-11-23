const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
var teamMembers = []



let createManager = () => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Please enter the name of the team Manager:'
            },

            {
                type: 'text',
                name: 'id',
                message: 'Please enter the ID Number of the team Manager:',
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the team Manager email:',

            },
            {
                type: 'text',
                name: 'office',
                message: 'Please enter the office number for the team Manager:'
            }

        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.office)
            teamMembers.push(manager)
            console.log(teamMembers)
            teamPrompt()
        })
}

let createEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Please enter the name of the team member:'
            },

            {
                type: 'text',
                name: 'id',
                message: 'Please enter the ID Number of the team member:',
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the team member email:',

            },
            {
                type: 'text',
                name: 'github',
                message: 'Please enter your GitHub:'
            }

        ])
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            teamMembers.push(engineer)
            console.log(teamMembers)
            teamPrompt()
        })
}


let createIntern = () => {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Please enter the name of the team member:'
            },

            {
                type: 'text',
                name: 'id',
                message: 'Please enter the ID Number of the team member:',
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the team member email:',

            },
            {
                type: 'text',
                name: 'school',
                message: 'Please enter your school name:'
            }

        ])
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            teamMembers.push(intern)
            console.log(teamMembers)
            teamPrompt()
        })
}

let teamPrompt = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'Please choose a role to add to your Team!',
            choices: ["Engineer", "Intern", "No more members!"]
        })
        .then(({ role }) => {
            switch (role) {
                case "Engineer":
                    createEngineer()
                    break;
                case "Intern":
                    createIntern()
                    break;
                case "No more members!":
                    // add fswrite later
                    break
            }
        })
}
createManager()

