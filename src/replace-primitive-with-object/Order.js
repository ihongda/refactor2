export default class Order {
    constructor(data) {
        this._orderId = data.orderId;
        this._priority = data.priority;
    }

    get priority() {
        return this._priority;
    }

    set priority(aString) {
        this._priority = aString;
    }
}