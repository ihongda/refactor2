export default class Telephone {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    get areaCode() {
        return this._areaCode;
    }

    set areaCode(value) {
        this._areaCode = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    equals(other) {
        if (other instanceof Telephone) {
            return this.areaCode === other.areaCode &&
                   this.number === other.number;
        }
        return false;
    }
}