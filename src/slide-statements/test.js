import { original } from './original';
import { refactor } from './refactor';
const implMap = new Map([['refactor', original], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Slide Statements', function () {
    implMap.forEach(function (func, implName) {
        it(implName + ' get and return instance', function () {
            let r1 = func.getInstance();
            let r2 = func.getInstance();

            assert.equal(func.allocatedResourcesCount(), 2);

            func.returnInstance(r2);
            assert.equal(func.allocatedResourcesCount(), 1);

            let r3 = func.getInstance();
            assert.equal(r1, "resource1");
            assert.equal(r2, "resource2");
            assert.equal(r3, "resource2");

        });
    });
});