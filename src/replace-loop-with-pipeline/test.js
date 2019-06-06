import original from './original'
import refactor from './refactor'
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

const input = "office, country, telephone\n" +
    "Chicago, USA, +1 312 373 1000\n" +
    "Beijing, China, +86 4008 900 505\n" +
    "Bangalore, India, +91 80 4064 9570\n" +
    "Porto Alegre, Brazil, +55 51 3079 3550\n" +
    "Chennai, India, +91 44 660 44766";

describe('split loop', function () {

    implMap.forEach(function (acquireData, implName) {
        it(implName + ' find India offices', function () {
            let result = acquireData(input);

            assert.equal(result[0].city, "Bangalore");
            assert.equal(result[0].phone, "+91 80 4064 9570");
            assert.equal(result[1].city, "Chennai");
            assert.equal(result[1].phone, "+91 44 660 44766");
        });
    });


});