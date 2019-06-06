export default class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set department(value) {
        this._department = value;
    }

    get department() {
        return this._department;
    }
}