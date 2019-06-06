import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let site1 = {
    customer: "unknown"
};

let site2 = {
    customer: {
        name: "Tom"
    }
};

describe('Introduce Special Case', function () {

    implMap.forEach(function (getCustomerInfo, implName) {
        it(implName + ' return populated unknown customer object', function () {
            const customerInfo = getCustomerInfo(site1);
            assert.equal(customerInfo.name, "occupant");
        });
        it(implName + ' return populated known customer object', function () {
            const customerInfo = getCustomerInfo(site2);
            assert.equal(customerInfo.name, "Tom");
        });
    });
});