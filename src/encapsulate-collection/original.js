
function countAdvancedCourses(person) {
    return person.courses
        .filter(c => c.isAdvanced)
        .length;
}

export { countAdvancedCourses }