export default class Shipment {
    constructor(name, trackingInformation) {
        this._name = name;
        this._shippingCompany = trackingInformation.shippingCompany;
        this._trackingNumber = trackingInformation.trackingNumber;
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