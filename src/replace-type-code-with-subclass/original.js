
export default function buildEmployee(data) {
    return new Employee(data);
}

class Employee {
    constructor(data) {
        this.validateType(data.type);
        this._name = data.name;
        this._type = data.type;
    }

    validateType(type) {
        if (!["engineer", "manager", "salesman"].includes(type))
            throw new Error(`Employee cannot be of type ${type}`);
    }

    toString() {
        return `${this._name} (${this._type})`;
    }
}
