const Manager = require('../lib/Manager')
const manager = new Manager('John','1234', 'fake@email.com', '123')
test('create a Manager object', () => {
    expect(manager.name).toBe('John')
    expect(manager.id).toBe('1234')
    expect(manager.email).toBe('fake@email.com')
})

test('retrieve officeNumber', () => {
    expect(manager.officeNumber).toBe('123')
})

