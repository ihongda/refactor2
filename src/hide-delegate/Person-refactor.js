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

    get manager() {
        return this._department.manager;
    }
}