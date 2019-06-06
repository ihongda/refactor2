import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let employee = {
    seniority: 3,
    monthsDisabled: 10,
    isPartTime: false,
    salary: 20000
};

describe('Consolidate Conditional Expression', function () {

    implMap.forEach(function (disabilityAmount, implName) {
        it(implName + ' should calculate disability for eligible employee', function () {
            employee.isPartTime = false;
            let amount = disabilityAmount(employee);

            assert.equal(amount, 15000);
        });
        it(implName + ' should calculate disability for ineligible employee', function () {
            employee.isPartTime = true;

            let amount = disabilityAmount(employee);

            assert.equal(amount, 0);
        });
    });
});