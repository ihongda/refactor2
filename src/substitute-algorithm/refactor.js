function foundPerson(people) {
    const candidates = ['John', 'Don', 'Kent'];
    return people.find(name => candidates.includes(name)) || '';
}

let refactor = foundPerson;

export { refactor }