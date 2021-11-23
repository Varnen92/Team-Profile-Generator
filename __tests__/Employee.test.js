const Employee = require('../lib/Employee')
const employee = new Employee('Jake', '234234234', 'fake@email.com')

test('create Employee object', () => {

    expect(employee.name).toBe('Jake')
    expect(employee.id).toBe('234234234')
    expect(employee.email).toBe('fake@email.com')
})

test('test if the name method works to retrieve name', () => {
    expect(employee.getName()).toBe('Jake')
})

test('test if id method works to retrieve id', () => {
    expect(employee.getId()).toBe('234234234')
})

test('test if email method works to retrieve email', () => {
    expect(employee.getEmail()).toBe('fake@email.com')
})