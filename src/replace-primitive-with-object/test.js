import Order from './Order';
import countImportantOrders from './original';

let assert = require('chai').assert;
let order1 = new Order({orderId: 1, priority: 'high'});
let order2 = new Order({orderId: 2, priority: 'rush'});
let order3 = new Order({orderId: 3, priority: 'normal'});
let order4 = new Order({orderId: 4, priority: 'low'});

describe('Original Find important orders', function () {

    it('should find important orders', () => {
        let orders = [order1, order2, order3, order4];

        let importantOrderCount = countImportantOrders(orders);
        assert.equal(importantOrderCount, 2);
    });
    it ('should find no important orders', () => {
        let orders = [order3, order4];

        let importantOrderCount = countImportantOrders(orders);
        assert.equal(importantOrderCount, 0);
    });
});