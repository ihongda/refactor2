import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Move Field', function () {
    implMap.forEach(function (buildAccount, implName) {
        it(implName + ' should know interest rate', function () {
            let account = buildAccount(1, 'Premium', 2.5);

            assert.equal(account.interestRate, 2.5);
        });
    });
});