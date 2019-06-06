import readingsOutsideRange from './refactor';
import NumberRange from "./NumberRange";
import TestData from './TestData';

let assert = require('chai').assert;
let expect = require('chai').expect;

describe('Introduce Parameter Object', function () {
    let station = TestData.station;

    it('should find 1 lower reading', function () {
        let range = new NumberRange(48, 58);
        let alerts = readingsOutsideRange(station, range);

        expect(alerts).to.have.lengthOf(1);
        assert.equal(alerts[0].temp, 47);
    });
    it('should find 1 max reading', function () {
        let range = new NumberRange(47, 57);
        let alerts = readingsOutsideRange(station, range);

        expect(alerts).to.have.lengthOf(1);
        assert.equal(alerts[0].temp, 58);
    });
    it('should find 2 readings', function () {
        let range = new NumberRange(48, 57);
        let alerts = readingsOutsideRange(station, range);

        expect(alerts).to.have.lengthOf(2);
    });
    it('should find 0 readings', function () {
        let range = new NumberRange(47, 58);
        let alerts = readingsOutsideRange(station, range);

        expect(alerts).to.have.lengthOf(0);
    });
});