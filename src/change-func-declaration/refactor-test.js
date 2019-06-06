import inNewEngland from './refactor';

let assert = require('chai').assert;

let customer = {
    address: {
        state: "MA"
    }
};

describe('Refactor Change Function', function () {
    it('should find customer lives in New England', function () {
        let isNewEnglandResident = inNewEngland(customer.address.state);

        assert.isTrue(isNewEnglandResident);
    });
});