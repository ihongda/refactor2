export default function buildParty(data) {
    switch (data.type) {
        case "E": return new Employee(data);
        case "D": return new Department(data);
        default:
            throw new Error("Invalid type " + data.type);
    }
}

class Employee {
    constructor(data) {
        this._id = data.id;
        this._name = data.name;
        this._monthlyCost = data.monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department {
    constructor(data){
        this._name = data.name;
        this._staff = data.staff;
    }

    get staff() {
        return this._staff.slice();
    }

    get name() {
        return this._name;
    }

    get monthlyCost() {
        return this.staff
                   .map(e => e.monthlyCost)
                   .reduce((sum, cost) => sum + cost);
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}