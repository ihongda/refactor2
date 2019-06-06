import TaxTables from './TaxTables'

export default class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get baseCharge() {
        return TaxTables.baseRate(this._month, this._year) * this._quantity;
    }

    get taxableCharge() {
        let thresholdTax = TaxTables.taxThreshold(this._year);
        return Math.max(0, this.baseCharge - thresholdTax);
    }

    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }
}