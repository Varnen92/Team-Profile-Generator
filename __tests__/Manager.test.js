const Manager = require('../lib/Manager')

test('create a Manager object', () => {
    const manager = new Manager('John')

    expect(manager.name).toBe('John')
    expect(manager.id).toEqual(expect.any(String))
    expect(manager.email).toEqual(exepct.any(String))
})

