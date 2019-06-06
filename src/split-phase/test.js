import original from './original'
import refactor from './refactor'
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

const cheapProd = {basePrice: 10, discountRate: .1, discountThreshold: 9};
const expensiveProd = {basePrice: 100, discountRate: .1, discountThreshold: 9};
const shippingMethod = {discountThreshold: 50, discountedFee: 1, feePerCase: 2 };

describe('Calculate order price - include shipping', function () {

    implMap.forEach(function (priceOrder, implName) {
        it(implName + ' should calculate order price - under thresholds', function () {
            let orderPrice = priceOrder(cheapProd, 1, shippingMethod);

            assert.equal(orderPrice, 12);
        });
        it(implName + ' should calculate order price - shipping discount', function () {
            let orderPrice = priceOrder(expensiveProd, 5, shippingMethod);

            assert.equal(orderPrice, 505);
        });
        it(implName + ' should calculate order price - product and shipping discount', function () {
            let orderPrice = priceOrder(expensiveProd, 10, shippingMethod);

            assert.equal(orderPrice, 1000);
        });
    });
});