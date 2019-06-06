import OutStream from "./OutStream";
import { original } from './original';
import { refactor } from './refactor';
const implMap = new Map([['refactor', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let person = {name: 'Tom',
        photo: {title: 'pic-title', location:'Houston, TX',
                date: new Date(2019, 11, 15), img: "http://"
                }
    };

describe('Move Statements to Callers', function () {
    implMap.forEach(function (func, implName) {
        it(implName + ' renderPerson contains photo location', function () {
            let outStream = new OutStream();
            func.renderPerson(outStream, person);
            let count = countLocation(outStream.results)

            assert.equal(count, 1);
        });
        it(implName + ' listRecentPhotos contains photo location', function () {
            let outStream = new OutStream();
            let photos = [person.photo];
            func.listRecentPhotos(outStream, photos);
            let count = countLocation(outStream.results)

            assert.equal(count, 1);
        });
    });
});

function countLocation(results) {
    return results.filter(e => e.includes(person.photo.location)).length;
}