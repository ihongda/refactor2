export default class CustomerData {
    constructor(data) {
        this._data = data;
    }

    compareUsage(customerID, laterYear, month) {
        const later   = this.data[customerID].usages[laterYear][month];
        const earlier = this.data[customerID].usages[laterYear - 1][month];
        return {laterAmount: later, change: later - earlier};
    }

    get data() {
        return this._data;
    }

    usage(customerId, year, month, amount) {
        this._data[customerId].usages[year][month] = amount;
    }
}