export default function buildParty(data) {
    switch (data.type) {
        case "E": return new Employee(data);
        case "D": return new Department(data);
        default:
            throw new Error("Invalid type " + data.type);
    }
}

class Party {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Employee extends Party {
    constructor(data) {
        super(data.name);
        this._monthlyCost = data.monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }
}

class Department extends Party {
    constructor(data){
        super(data.name);
        this._staff = data.staff;
    }

    get staff() {
        return this._staff.slice();
    }

    get monthlyCost() {
        return this.staff
                   .map(e => e.monthlyCost)
                   .reduce((sum, cost) => sum + cost);
    }
}