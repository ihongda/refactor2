import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let plan = {
    summerStart: new Date(2019, 5, 1),
    summerEnd: new Date(2019, 7, 31),
    summerRate: 150,
    regularRate: 200,
    regularServiceCharge: 50
};

describe('Decompose Conditional', function () {

    implMap.forEach(function (calcCharge, implName) {
        it(implName + ' should calculate summer charge', function () {
            const travel = {
                date: new Date(2019, 5, 1),
                quantity: 2
            };
            let charge = calcCharge(travel, plan);

            assert.equal(charge, 300);
        });
        it(implName + ' should calculate regular charge', function () {
            const travel = {
                date: new Date(2019, 8, 1),
                quantity: 4
            };
            let charge = calcCharge(travel, plan);

            assert.equal(charge, 850);
        });
    });
});