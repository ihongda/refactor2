
export default function countByGender(data) {
    const people = loadPeople(data);

    const maleCnt = people.filter(p => p.isMale).length;
    const femaleCnt = people.filter(p => p.isFemale).length;

    return { maleCnt: maleCnt, femaleCnt: femaleCnt };
}

function loadPeople(data) {
    return data.map(record => new Person(record.name, record.gender));
}

class Person {
    constructor(name, gender) {
        this._name = name;
        this._gender = gender;
    }

    get isMale() {
        return this._gender === "M";
    }

    get isFemale() {
        return this._gender === "F";
    }

    get name() {
        return this._name;
    }
}
