
const Engineer = require ('../lib/Engineer.js')
const engineer = new Engineer('John', '1234', 'email', 'gitgit')

test('create engineer object', () => {

    expect(engineer.name).toBe('John')
    expect(engineer.id).toBe('1234')
    expect(engineer.email).toBe('email')
})

test('test if github method works', () => {
    expect(engineer.getGitHub()).toBe('gitgit')
})