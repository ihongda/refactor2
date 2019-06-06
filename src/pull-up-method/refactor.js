const MONTHS_IN_YEAR = 12;

export default function calcAnnualCost(data) {
    let party = buildParty(data);
    return party.annualCost;
}

function buildParty(data) {
    switch (data.type) {
        case "Employee":
            return new Employee(data);
        case "Department":
            return new Department(data);
        default:
            return new Party();
    }
}

class Party {
    get annualCost() {
        return this.monthlyCost * MONTHS_IN_YEAR;
    }

    get monthlyCost() {
        throw new TypeError("method not implemented");
    }
}

class Employee extends Party {
    constructor(data) {
        super();
        this._monthlyCost = data.monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }
}

class Department extends Party {
    constructor(data) {
        super();
        this._monthlyCost = data.monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }
}