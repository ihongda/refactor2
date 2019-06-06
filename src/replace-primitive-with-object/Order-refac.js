import Priority from "./Priority";

export default class Order {
    constructor(data) {
        this._orderId = data.orderId;
        this._priority = new Priority(data.priority);
    }

    get priority() {
        return this._priority;
    }

    set priority(aString) {
        this._priority = aString;
    }
}