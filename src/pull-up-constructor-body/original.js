
export default function buildParty(data) {
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
    get name() {
        return this._name;
    }
}

class Employee extends Party {
    constructor(data) {
        super();
        this._id = data.id;
        this._name = data.name;
        this._monthlyCost = data.monthlyCost;
    }
}

class Department extends Party {
    constructor(data) {
        super();
        this._name = data.name;
        this._staff = data.staff;
    }
}