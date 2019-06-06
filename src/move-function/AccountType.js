export default class AccountType {
    constructor(name, isPremium) {
        this._name = name;
        this._isPremium = isPremium;
    }

    get name() {
        return this._name;
    }

    get isPremium() {
        return this._isPremium;
    }
}