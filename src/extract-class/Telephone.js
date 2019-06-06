export default class Telephone {
    constructor(areaCode, phoneNumber) {
        this._areaCode = areaCode;
        this._phoneNumber = phoneNumber;
    }

    toString() {
        return `(${this.areaCode}) ${this.phoneNumber}`;
    }

    get areaCode() {
        return this._areaCode;
    }

    set areaCode(value) {
        this._areaCode = value;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
    }
}