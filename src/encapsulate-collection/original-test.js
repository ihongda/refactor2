import Person from './Person';
import Course from './Course';
import {countAdvancedCourses} from './original';

let assert = require('chai').assert;

let joe = new Person("Joe");
joe.courses = [new Course("Math", true), new Course("History", false), new Course("English", false)];

describe('Original Encapsulate Collection', function () {

    it('Should count advance courses', function () {
        let advanceCourseCount = countAdvancedCourses(joe);

        assert.equal(advanceCourseCount, 1);
    });
});