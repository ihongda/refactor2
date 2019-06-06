export default class Shipment {
    constructor(name, trackingInformation) {
        this._name = name;
        this._trackingInformation = trackingInformation;
    }

    get display() {
        return `${this.trackingInformation.shippingCompany}: ${this.trackingInformation.trackingNumber}`;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get trackingInformation() {
        return this._trackingInformation;
    }

    set trackingInformation(value) {
        this._trackingInformation = value;
    }
}