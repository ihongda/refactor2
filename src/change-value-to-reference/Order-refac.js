export default class Order {
    constructor(data, customerRepo) {
        this._id = data.id;
        this._customer = customerRepo.save(data.customer);
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