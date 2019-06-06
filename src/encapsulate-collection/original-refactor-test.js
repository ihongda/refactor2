import Person from './Person-Refactor';
import Course from './Course';
import {countAdvancedCourses} from './original';

let assert = require('chai').assert;
let expect = require('chai').expect;

let joe = new Person("Joe");
joe.addCourse(new Course("Math", true));
joe.addCourse(new Course("History", false));
joe.addCourse(new Course("English", false));

describe('Refactor Encapsulate Collection', function () {

    it('Should count advance courses', function () {
        let advanceCourseCount = countAdvancedCourses(joe);

        assert.equal(advanceCourseCount, 1);
    });
    it('Should not allow modification of encapsulated collection', () => {
        let courses = joe.courses;
        courses.pop();

        expect(joe.courses).to.have.lengthOf(3);
        expect(courses).to.have.lengthOf(2);
    });
    it ('Should copy array when set', () => {
        let courses = [new Course("History", true), new Course("English", false)];
        let tom = new Person("Tom");
        tom.courses = courses;

        courses.pop();

        expect(tom.courses).to.have.lengthOf(2);
        expect(courses).to.have.lengthOf(1);
    });
});