import Customer from "./Customer";

export default class CustomerRepo {

    constructor() {
        this._repoData = new Map();
    }

    save(customer) {
        if (this._repoData.has(customer.id)) {
            let repoCust = this.find(customer.id);
            repoCust.name = customer.name;
        } else {
            this._repoData.set(customer.id, new Customer(customer));
        }
        return this.find(customer.id)
    }

    find(id) {
        return this._repoData.get(id);
    }
}