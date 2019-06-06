import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let emp1 = {
    type: "E",
    name: "John",
    monthlyCost: 10
};

let emp2 = {
    type: "E",
    name: "Sally",
    monthlyCost: 20
};

let department = {
    type: "D",
    name: "Accounting",
    staff: [ emp1, emp2 ]
};

describe('Remove Superclass', function () {
    implMap.forEach(function (buildParty, implName) {
        it(implName + ' employee monthly cost', function () {
            let john = buildParty(emp1);
            assert.equal(john.annualCost, 120);

            let sally = buildParty(emp2);
            assert.equal(sally.annualCost, 240);
        });
        it(implName + ' department monthly cost', function () {
            let accounting = buildParty(department);
            assert.equal(accounting.annualCost, 360);
        });
    });
});
