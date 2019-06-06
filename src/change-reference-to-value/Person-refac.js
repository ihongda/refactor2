import Telephone from "./Telephone-refac";

export default class Person {
    constructor() {
        this._telephone = new Telephone();
    }

    get officeAreaCode() {
        return this._telephone.areaCode;
    }

    set officeAreaCode(areaCode) {
        this._telephone = new Telephone(areaCode, this.officeNumber)
    }

    get officeNumber() {
        return this._telephone.number;
    }

    set officeNumber(number) {
        this._telephone = new Telephone(this.officeAreaCode, number);
    }

    get officePhone() {
        return this._telephone.areaCode + "." +
               this._telephone.number;
    }
}