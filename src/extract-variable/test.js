import original from "./original";
import refactor from "./refactor";
import refactor2 from "./refactor2";
const implMap = new Map([['original', original], ['refactor1', refactor], ['refactor2', refactor2]]);

let assert = require('chai').assert;

describe('Extract Variable', function () {

    implMap.forEach(function (price, implName) {
        it(implName + ' should price order: no discount', function () {
            const order = {itemPrice: 10, quantity: 5};

            let orderPrice = price(order);

            assert.equal(orderPrice, 55);
        });
        it(implName + ' should price order: with discount', function () {
            const order = {itemPrice: 5, quantity: 1000};

            let orderPrice = price(order);

            assert.equal(orderPrice, 4975);
        });
    });
});