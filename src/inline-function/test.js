import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let driver1 = {"numberOfLateDeliveries": 5};
let driver2 = {"numberOfLateDeliveries": 6};

describe('Combine function to class', function () {

    implMap.forEach(function (impl, implName) {
        let getRating = impl;

        it(implName + ' should rate driver as 1', function () {
            let rating = getRating(driver1);

            assert.equal(rating, 1);
        });
        it(implName + ' should rate driver as 2', function () {
            let rating = getRating(driver2);

            assert.equal(rating, 2);
        });
    });

});