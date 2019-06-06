import { original } from './original';
import { refactor } from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let europeanSwallow = {
    type: "EuropeanSwallow",
    numberOfCoconuts: 0,
    voltage: 0,
    isNailed: true
};

let africanSwallow = {
    type: "AfricanSwallow",
    numberOfCoconuts: 3,
    voltage: 100,
    isNailed: true
};

let norwegianBlueParrot = {
    type: "NorwegianBlueParrot",
    numberOfCoconuts: 5,
    voltage: 100,
    isNailed: false
};

let unknown = { type: "bird" };

function testPlumage(functions, bird, expected) {
    let result = functions.plumage(bird);
    assert.equal(result, expected);
}

function testAirSpeedVelocity(functions, bird, expected) {
    let result = functions.airSpeedVelocity(bird);
    assert.equal(result, expected);
}

describe('Replace Conditional with Polymorphism', function () {

    implMap.forEach(function (functions, implName) {
        it(implName + ' get plumage for birds', function () {
            testPlumage(functions, europeanSwallow, "average");
            testPlumage(functions, africanSwallow, "tired");
            testPlumage(functions, norwegianBlueParrot, "beautiful");
            testPlumage(functions, unknown, "unknown");
        });
        it(implName + ' get airSpeedVelocity for birds', function () {
            testAirSpeedVelocity(functions, europeanSwallow, 35);
            testAirSpeedVelocity(functions, africanSwallow, 34);
            testAirSpeedVelocity(functions, norwegianBlueParrot, 20);
            testAirSpeedVelocity(functions, unknown, null);
        });
    });
});