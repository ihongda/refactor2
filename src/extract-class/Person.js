export default class Person {
    constructor(data) {
        this._name = data.name;
        this._areaCode = data.areaCode;
        this._phoneNumber = data.phoneNumber;
    }

    get telephoneNumber() {
        return `(${this.areaCode}) ${this.phoneNumber}`;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
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