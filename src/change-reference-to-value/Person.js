import Telephone from "./Telephone";

export default class Person {
    constructor() {
        this._telephone = new Telephone();
    }

    get officeAreaCode() {
        return this._telephone.areaCode;
    }

    set officeAreaCode(areaCode) {
        this._telephone.areaCode = areaCode;
    }

    get officeNumber() {
        return this._telephone.number;
    }

    set officeNumber(number) {
        this._telephone.number = number;
    }

    get officePhone() {
        return this._telephone.areaCode + "." +
               this._telephone.number;
    }
}