import Shipment from './Shipment';
import ShipmentRefactor from './Shipment-refactor'
let assert = require('chai').assert;

let trackingInfo = {shippingCompany: 'Acme Shipping', trackingNumber: 'ABC123'};

const implMap = new Map([['refactor', new Shipment('Shipment1', trackingInfo)],
                         ['refactor', new ShipmentRefactor('Shipment2', trackingInfo)]]);

describe('Format Tracking Information', function () {

    implMap.forEach(function (shipment, implName) {

        it(implName + ' should format tracking info', () => {

            assert.equal(shipment.display, 'Acme Shipping: ABC123');
        });
    });
});