import Customer from "./Customer";

export default class Order {
    constructor(data) {
        this._id = data.id;
        this._customer = new Customer(data.customer);
    }

    get id() {
        return this._id;
    }

    get customer() {
        return this._customer;
    }

    set customer(value) {
        this._customer = value;
    }
}