const Intern = require('../lib/Intern')
const intern = new Intern ('John', '123', 'email.com', 'University')

test('create intern object', () => {

    expect(intern.name).toBe('John')
    expect(intern.id).toBe('123')
    expect(intern.email).toBe('email.com')
})

test('test if school method works', () => {
    expect(intern.getSchool()).toBe('University')
})