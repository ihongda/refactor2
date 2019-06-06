import Person from './Person';
import PersonRefactor from './Person-refac'
let assert = require('chai').assert;

let data = {name: 'Tom', areaCode: '404', phoneNumber: '9732528' };

const implMap = new Map([['refactor', new Person(data)],
                         ['refactor', new PersonRefactor(data)]]);

describe('Extract Class', function () {

    implMap.forEach(function (person, implName) {

        it(implName + ' should format phone number', () => {

            assert.equal(person.telephoneNumber, '(404) 9732528');
        });
    });
});