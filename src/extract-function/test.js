import original from "./original";
import refactor from "./refactor";
const implMap = new Map([['original', original], ['refactor', refactor]]);

let sinon = require('sinon');
let assert = require('chai').assert;

let invoice = {
    orders: [
        {amount: 1},
        {amount: 2},
        {amount: 3}
    ],
    "customer": "the customer"
};
let logger = {};
const clock = {
    today: {
        getFullYear: () => 2018,
        getMonth: () => 11,
        getDate: () => 15
    }
};

beforeEach(() => {
    logger = {log: sinon.fake()};
});

describe('Extract Function', function () {

    implMap.forEach(function (printOwing, implName) {
        it(implName + ' should log cust msg', function () {
            printOwing(invoice, logger, clock);

            assert.isTrue(logger.log.calledWith("name: the customer"));
            assert.isTrue(logger.log.calledWith("amount: 6"));
            assert.isTrue(logger.log.calledWith("due: 1/14/2019"));
        });
    });
});