import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let reveredScrollNeedsCleaning = {
    id: 100,
    dateLastCleaned: "2001-12-01",
    catalog: {
        id: 1,
        title: "Old Tales of the Barb",
        tags: ["magical", "revered"],
    }
};

let scrollDoesNotNeedCleaning = {
    id: 200,
    dateLastCleaned: "2011-12-01",
    catalog: {
        id: 2,
        title: "Magical Beast",
        tags: ["magical"]
    }
};

describe('Replace Superclass with Delegate', function () {
    implMap.forEach(function (buildScroll, implName) {
        it(implName + ' Needs Cleaning', function () {
            let scroll = buildScroll(reveredScrollNeedsCleaning);
            assert.equal(scroll.needsCleaning("2019-12-01"), true);
        });
        it(implName + ' Does not need Cleaning', function () {
            let scroll = buildScroll(scrollDoesNotNeedCleaning);
            assert.equal(scroll.needsCleaning("2015-12-01"), false);
        });
    });
});
