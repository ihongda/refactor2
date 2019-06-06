import { original } from "./original";
import { refactor } from "./refactor";
import TestData from './TestData';
const implMap = new Map([['refactor', original], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Encapsulate Record', () => {

    let customerData = {};

    beforeEach(() => {
        customerData = TestData.customerData;
    });

    implMap.forEach(function (methods, implName) {
        it(implName + ' should read data', function () {
            let usageCompare = methods.compareUsage(customerData, 1920, 2016, 1);

            assert.deepEqual(usageCompare, { laterAmount: 50, change: 10 });
        });
        it(implName + ' should change data', function () {
            assert.equal(customerData[38673].usages[2016][1], 20);

            methods.setUsage(customerData, 38673, 2016, 1, 1);

            assert.equal(customerData[38673].usages[2016][1], 1);
        });
    });
});