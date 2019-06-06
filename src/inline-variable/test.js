import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let order = {
    quantity: "2",
    itemPrice: 4.00
};

describe('Inline Variable', function () {
    implMap.forEach(function (calcLineTotal, implName) {
        it(implName + ' should calculate line item total', function () {
            let lineTotal = calcLineTotal(order);

            assert.equal(lineTotal, 8.8);
        });
    });
});