import original from './original'
import refactor from './refactor'
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

const people = [
    { name: "Tom", age: 32, salary: 1500},
    { name: "Kim", age: 33, salary: 2000},
    { name: "Ian", age: 17, salary: 500}
];

describe('split loop', function () {

    implMap.forEach(function (findYoungestAndTotalSalary, implName) {
        it(implName + ' find youngest and total salary', function () {
            let result = findYoungestAndTotalSalary(people);

            assert.equal(result.youngest, 17);
            assert.equal(result.totalSalary, 4000);
        });
        it(implName + ' find youngest and total salary - empty array', function () {
            const empty = [];
            let result = findYoungestAndTotalSalary(empty);

            assert.equal(result.youngest, Infinity);
            assert.equal(result.totalSalary, 0);
        });
    });


});