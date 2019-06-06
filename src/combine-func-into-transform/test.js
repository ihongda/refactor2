import original from './original';
import { calcTotalTax, enrichReading } from "./refactor";

const implMap = new Map([['original', original], ['refactor', calcTotalTax]]);

let assert = require('chai').assert;

describe('Combine Functions into Class', function () {

    implMap.forEach(function (calcTotalTax, implName) {
        it(implName + ' should calculate tea tax under threshold', function () {
            const reading = {
                customer: "ivan", quantity: 10, month: 5, year: 2017
            };
            let tax = calcTotalTax(reading);

            assert.equal(tax, 0);
        });
        it(implName + ' should calculate tea tax over threshold', function () {
            const reading = {
                customer: "Tom", quantity: 1000, month: 12, year: 2018
            };
            let tax = calcTotalTax(reading);

            assert.equal(tax, 90);
        });
        it('refactor - check reading unchanged', function() {
            const originalReading = {customer: "ivan", quantity: 15, month: 5, year: 2017};
            const baseReading = {customer: "ivan", quantity: 15, month: 5, year: 2017};

            enrichReading(baseReading);
            assert.deepEqual(baseReading, originalReading);
        });
    });
});