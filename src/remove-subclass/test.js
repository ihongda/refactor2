import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let data = [
    {
        gender: "M",
        name: "John"
    },
    {
        gender: "M",
        name: "Larry"
    },
    {
        gender: "F",
        name: "Sally"
    },
    {
        gender: "X",
        name: "Pat"
    },
];

describe('Remove Subclass', function () {
    implMap.forEach(function (countByGender, implName) {
        it(implName + ' count by gender', function () {
            let counts = countByGender(data);
            assert.equal(counts.maleCnt, 2);
            assert.equal(counts.femaleCnt, 1);
        });
    });
});
