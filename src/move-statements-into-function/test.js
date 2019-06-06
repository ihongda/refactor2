import { original } from './original';
import { refactor } from './refactor';
const implMap = new Map([['refactor', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let person = {name: 'Tom', photo: {title: 'pic-title', location:'Houston, TX',
        date: new Date(2019, 11, 15)} };

describe('Move Statements into Function', function () {
    implMap.forEach(function (func, implName) {
        it(implName + ' renderPerson contains photo title', function () {
            let html = func.renderPerson(person);
            let count = countPhotoTitle(html)

            assert.equal(count, 1);
        });
        it(implName + ' photoDiv contains photo title', function () {
            let html = func.photoDiv(person.photo);
            let count = countPhotoTitle(html)

            assert.equal(count, 1);
        });
    });
});

function countPhotoTitle(html) {
    let elements = html.split('\n');
    return elements.filter(e => e.includes(person.photo.title)).length;
}