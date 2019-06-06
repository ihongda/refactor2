
export default function countByGender(data) {
    const people = loadPeople(data);

    const maleCnt = people.filter(p => p instanceof Male).length;
    const femaleCnt = people.filter(p => p instanceof Female).length;

    return { maleCnt: maleCnt, femaleCnt: femaleCnt };
}

function loadPeople(data) {
    return data.map(record => {
        switch (record.gender) {
            case "M": return new Male(data.name);
            case "F": return new Female(data.name);
            default: return new Person(data.name);
        }
    });
}

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

class Male extends Person {
}

class Female extends Person {
}
