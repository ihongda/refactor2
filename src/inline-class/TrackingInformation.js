export default class TrackingInformation {
    constructor(data) {
        this._shippingCompany = data._shippingCompany;
        this._trackingNumber = data._trackingNumber;
    }

    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }

    get shippingCompany() {
        return this._shippingCompany;
    }

    set shippingCompany(value) {
        this._shippingCompany = value;
    }

    get trackingNumber() {
        return this._trackingNumber;
    }

    set trackingNumber(value) {
        this._trackingNumber = value;
    }
}