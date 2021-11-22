const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id 
        this.email = email 
    }
     getName() {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: "Please enter the name of the team member:"
            })
            .then(({ name }) => {
                this.employee = new Employee(name)
                this.getId()
            })
        }
    getId(){
        inquirer
            .prompt({
                type: 'text',
                name: 'id',
                message: 'Please enter the ID Number of the team member:',
            })
             .then(({ id }) => {
                this.employee.id = id
                this.getEmail()
            }) 
        }
    getEmail(){
        inquirer
            .prompt({
                type: 'text',
                name: 'email',
                message: 'Please enter the team member email:',
            })
            .then(({ email }) => {
                this.employee.email = email
                console.log(this.employee)                
            })
    }
    getRole() {
        return Employee
    } 
}




module.exports = Employee