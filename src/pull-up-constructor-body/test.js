import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let employee = {
    type: "Employee",
    id: 10,
    name: "John",
    monthlyCost: 100
};

let department = {
    type: "Department",
    name: "Accounting",
    staff: ["John", "Sally"]
};

describe('Pull-up Method', function () {
    implMap.forEach(function (buildParty, implName) {
        it(implName + ' get name - Employee', function () {
            let party = buildParty(employee);
            assert.equal(party.name, "John");
        });
        it(implName + ' get name - Department', function () {
            let party = buildParty(department);
            assert.equal(party.name, "Accounting");
        });
    });
});
