const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')

 
let createTeam = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'Please choose a role to add to your Team!',
            choices: ["Manager", "Engineer", "Intern", "No more members!"]
        })
        .then(({ role }) => {
            switch (role) {
                case "Manager":
                    createManager()
                    break;
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

let createManager = () => {
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

            }])
        .then(res => console.log(res))
}
createTeam() 

