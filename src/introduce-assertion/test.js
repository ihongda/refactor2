import Customer from './Customer';

const AssertionError = require('assert').AssertionError;
let assert = require('chai').assert;

let data1 = {
    discount: .02
};

let data2 = {
    discount: -.1
};

describe('Introduce Assertion', function () {
    it('Calc amount for positive discount', function () {
        const cust = new Customer(data1);
        assert.equal(cust.applyDiscount(100), 98);
    });
    it('Calc amount for negative discount', function () {
        try {
            new Customer(data2);
        } catch (e) {
            if (e instanceof AssertionError) {
                return;
            }
        }
        assert.fail();
    });
});