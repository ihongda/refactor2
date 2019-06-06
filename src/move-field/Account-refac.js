export default class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        console.assert(interestRate === this._type.interestRate,
                       'Account type interest rate=%d request interest rate=%d',
                        this._type.interestRate, interestRate);
    }

    get interestRate() {
        return this._type.interestRate;
    }
}