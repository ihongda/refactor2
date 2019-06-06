import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;
let expect = require('chai').expect;

let engineer = {
    type: "engineer",
    name: "John"
};

let salesman = {
    type: "salesman",
    name: "Sally"
};

let error = {
    type: "error",
    name: "Eddie"
};

describe('Replace type code with subclass', function () {
    implMap.forEach(function (buildEmployee, implName) {
        it(implName + ' engineer toString', function () {
            let employee = buildEmployee(engineer);
            assert.equal(employee.toString(), "John (engineer)");
        });
        it(implName + ' salesman toString', function () {
            let employee = buildEmployee(salesman);
            assert.equal(employee.toString(), "Sally (salesman)");
        });
        it(implName + ' unknown employee error', function () {
            expect(() => buildEmployee(error)).to.throw(Error);
        });
    });
});
