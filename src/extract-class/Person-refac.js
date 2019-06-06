import Telephone from "./Telephone";

export default class Person {
    constructor(data) {
        this._name = data.name;
        this._telephone = new Telephone(data.areaCode, data.phoneNumber);
    }

    get telephoneNumber() {
        return this.telephone.toString();
    }

    get telephone() {
        return this._telephone;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}