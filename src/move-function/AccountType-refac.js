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

    overdraftCharge(daysOverdrawn) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (daysOverdrawn <= 7) {
                return baseCharge;
            } else {
                return baseCharge + (daysOverdrawn - 7) * 0.85;
            }
        } else {
            return daysOverdrawn * 1.75;
        }
    }
}