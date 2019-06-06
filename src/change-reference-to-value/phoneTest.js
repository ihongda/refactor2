import orig from './Telephone'
import refactor from './Telephone-refac'
const implMap = new Map([['refactor', orig], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Change reference to value - Phone Compare', function () {

    implMap.forEach(function (Telephone, implName) {
        it(implName + ' Should find telephones equals', function () {
            const t1 = new Telephone(218, 2592860);
            const t2 = new Telephone(218, 2592860);

            assert.isTrue(t1.equals(t2));
        });
        it(implName + ' Should find telephones different', function () {
            const t1 = new Telephone(218, 2592860);
            const t2 = new Telephone(713, 4464684);

            assert.isFalse(t1.equals(t2));
        });
    });
});