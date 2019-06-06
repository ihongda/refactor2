import Order from './Order';
import OrderRefactor from './Order-refac';

let assert = require('chai').assert;
let item1 = {price: 100.00};
let item2 = {price: 1000.00};

const implMap = new Map([['refactor', {cheap: new Order(1, item1),
                                       expensive: new Order(2, item2)}],
                         ['refactor', {cheap: new OrderRefactor(1, item1),
                                       expensive: new OrderRefactor(2, item2)}]]);

describe('Price Order', function () {

    implMap.forEach(function (orders, implName) {

        it(implName + ' should price cheap item with normal discount', () => {

            let orderPrice = orders.cheap.price;
            assert.equal(orderPrice, 98.00);
        });
        it(implName + ' should price expensive item with higher discount', () => {

            let orderPrice = orders.expensive.price;
            assert.equal(orderPrice, 1900.00);
        });
    });
});