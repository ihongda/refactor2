import Order from './Order-refac';
import countImportantOrders from './original-refac';
import Priority from "./Priority";

let assert = require('chai').assert;
let order1 = new Order({orderId: 1, priority: 'high'});
let order2 = new Order({orderId: 2, priority: 'rush'});
let order3 = new Order({orderId: 3, priority: 'normal'});
let order4 = new Order({orderId: 4, priority: 'low'});

describe('Priority Class', () => {
    let normal = new Priority("normal");
    let high = new Priority("high");

    it('should throw error when invalid priority', () => {
        try {
            new Priority("BadValue");
            assert.fail("should throw error");
        } catch (e) {
            assert.instanceOf(e, Error);
        }
    });
    it ('should compare higher priority', () => {
        assert.isTrue(normal.lowerThan(high));
    });
    it ('should compare lower priority', () => {
        assert.isTrue(high.higherThan(normal));
    });
    it ('should find same priority as equal', () => {
        assert.isTrue(normal.equals(new Priority("normal")));
    });
    it ('should find different priority as not equal', () => {
        assert.isFalse(high.equals(normal));
    });
});

describe('Refactor Find important orders', function () {

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