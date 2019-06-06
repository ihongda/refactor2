export default class AccountType {
    constructor(name, interestRate) {
        this._name = name;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}