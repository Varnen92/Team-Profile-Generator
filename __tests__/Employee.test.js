// wants name, id, email, getName(), getId(), getEmail(), getRole()//returns employee

const Employee = require('../lib/Employee')

test('create Employee object', () => {
    const employee = new Employee('Jake')

    expect(employee.name).toBe('Jake')
    expect(employee.id).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
})