import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let employee = {
    type: "Employee",
    monthlyCost: 10
};

let department = {
    type: "Department",
    monthlyCost: 100
};

describe('Pull-up Method', function () {
    implMap.forEach(function (calcAnnualCost, implName) {
        it(implName + ' calculate annual cost - Employee', function () {
            let annualCost = calcAnnualCost(employee);
            assert.equal(annualCost, 120);
        });
        it(implName + ' calculate annual cost - Department', function () {
            let annualCost = calcAnnualCost(department);
            assert.equal(annualCost, 1200);
        });
    });
});
