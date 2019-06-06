export default function findYoungestAndTotalSalary(people) {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
        totalSalary += p.salary;
    }

    return {youngest: youngest, totalSalary: totalSalary }
}