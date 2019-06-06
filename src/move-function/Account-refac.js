export default class Account {

    constructor(data, accountType) {
        this._daysOverdrawn = data.daysOverdrawn;
        this._type = accountType;
    }

    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this.daysOverdrawn);
        return result;
    }

    get type() {
        return this._type;
    }

    get daysOverdrawn() {
        return this._daysOverdrawn;
    }
}