import orig from './Person'
import refactor from './Person-refac'
const implMap = new Map([['refactor', orig], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Change reference to value', function () {

    implMap.forEach(function (Person, implName) {
        it(implName + ' set and get phone', function () {
            let person = new Person();
            person.officeNumber = 2592860;
            person.officeAreaCode = 281;

            assert.equal(person.officePhone, "281.2592860");
        });
    });
});