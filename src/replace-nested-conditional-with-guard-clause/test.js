import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let instrument = {
    capital: 3000,
    duration: 10,
    income: 300,
    adjustmentFactor: .75
};

describe('Replace nested conditional with guard clause', function () {

    implMap.forEach(function (adjustedCapital, implName) {
        it(implName + ' should calculate adjusted income amount', function () {
            instrument.interestRate = 2.5;
            let result = adjustedCapital(instrument);

            assert.equal(result, 22.5);
        });
        it(implName + ' should calculate adjusted income amount as zero', function () {
            instrument.interestRate = 0;

            let result = adjustedCapital(instrument);

            assert.equal(result, 0);
        });
    });
});