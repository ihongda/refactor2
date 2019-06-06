import { original } from './original';
import { refactor } from './refactor';

let assert = require('chai').assert;

let people = ['Tom', 'Don', 'Ian'];

const implMap = new Map([['refactor', original],
                         ['refactor', refactor]]);

describe('Find Person', function () {

    implMap.forEach(function (foundPerson, implName) {

        it(implName + ' should find Don', () => {

            assert.equal(foundPerson(people), 'Don');
        });
    });
});