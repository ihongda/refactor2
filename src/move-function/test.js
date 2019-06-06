import original from './original';
import refactor from './refactor';

const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;


describe('Calculate Bank Charge no overdraft', function () {
    implMap.forEach(function (buildAccount, implName) {
        it(implName + 'Should calculate normal bank charge', () => {
            let account = buildAccount(0, 'Premium');
            assert.equal(account.bankCharge, 4.5);
        });
    });
});

describe('Calculate Bank Charge with overdraft', function () {
    implMap.forEach(function (buildAccount, implName) {
        it(implName + ' Should calculate normal bank charge', () => {
            let account = buildAccount(5, 'Standard');
            assert.equal(account.bankCharge, 13.25);
        });
        it(implName + ' Should calculate premium bank charge', () => {
            let account = buildAccount(5, 'Premium');
            assert.equal(account.bankCharge, 14.5);
        });
        it(implName + ' Should calculate premium bank change with 7+ overdraft days', () => {
            let account = buildAccount(8, 'Premium');
            assert.equal(account.bankCharge, 15.35)
        });
    });
});