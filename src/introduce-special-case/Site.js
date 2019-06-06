
let defaultCustomer = {
  name: "occupant"
};

export default class Site {
    constructor(data) {
        Object.assign(this, data);
    }

    getCustomer() {
        if (this.customer === "unknown") {
            return defaultCustomer;
        }
        return this.customer;
    }
}
