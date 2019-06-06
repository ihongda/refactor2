export default function findYoungestAndTotalSalary(people) {
    return { youngest: findYoungest(people),
             totalSalary: totalSalary(people) }
}

function findYoungest(people) {
    return Math.min(...people.map(p => p.age));
}

function totalSalary(people) {
    return people.reduce((total, p) => total + p.salary, 0)
}