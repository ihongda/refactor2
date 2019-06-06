import inNewEngland from './original';

let assert = require('chai').assert;

let customer = {
    address: {
        state: "MA"
    }
};

describe('Original Change Function', function () {
    it('should find customer lives in New England', function () {
        let isNewEnglandResident = inNewEngland(customer);

        assert.isTrue(isNewEnglandResident);
    });
});