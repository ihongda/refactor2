let assert = require('assert');

export default class Customer {
    constructor(data) {
        this.discount = data.discount;
    }

    set discount(aDiscount) {
        assert(aDiscount != null && aDiscount >= 0);
        this._discount = aDiscount;
    }

    applyDiscount(amount) {
        return amount - (this._discount * amount);
    }
}