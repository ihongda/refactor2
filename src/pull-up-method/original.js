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

class Party {}

class Employee extends Party {
    constructor(data) {
        super();
        this._monthlyCost = data.monthlyCost;
    }

    get annualCost() {
        return this._monthlyCost * MONTHS_IN_YEAR;
    }
}

class Department extends Party {
    constructor(data) {
        super();
        this._monthlyCost = data.monthlyCost;
    }

    get annualCost() {
        return this._monthlyCost * MONTHS_IN_YEAR;
    }
}