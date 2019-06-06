
export default function buildEmployee(data) {
    switch (data.type) {
        case "engineer": return new Engineer(data);
        case "manager":  return new Manager(data);
        case "salesman": return new Salesman(data);
        default:
            throw new Error(`Employee cannot be of type ${data.type}`);

    }
}

class Employee {
    constructor(data) {
        this._name = data.name;
        this._type = data.type;
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

class Engineer extends Employee {
    get type() {
        return "engineer";
    }
}

class Manager extends Employee {
    get type() {
        return "manager";
    }
}

class Salesman extends Employee {
    get type() {
        return "salesman";
    }
}
