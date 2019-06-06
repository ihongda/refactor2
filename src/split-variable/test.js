import original from './original'
import refactor from './refactor'
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('split variable', function () {

    implMap.forEach(function (discount, implName) {
        it(implName + ' compute discount', function () {
            let result = discount(51, 101);

            assert.equal(result, 48);
        });
    });


});