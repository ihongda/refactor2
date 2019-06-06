export default class Department {
    constructor(manager, chargeCode) {
        this._manager = manager;
        this._chargeCode = chargeCode;
    }

    get manager() {
        return this._manager;
    }

    set manager(value) {
        this._manager = value;
    }

    get chargeCode() {
        return this._chargeCode;
    }

    set chargeCode(value) {
        this._chargeCode = value;
    }
}