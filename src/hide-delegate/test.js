import Person from './Person';
import PersonRefactor from './Person-refactor';
import Department from "./Department";

let assert = require('chai').assert;

let department = new Department('Larry', '109ACCT');

describe('Get Manager for Person', function () {

    it('Original should get manager', () => {
        let person = new Person('Fred');
        person.department = department;
        assert.equal(person.department.manager, 'Larry');
    });
    it('Refactor should get manager', () => {
        let person = new PersonRefactor('Fred');
        person.department = department;
        assert.equal(person.manager, 'Larry');
    });
});