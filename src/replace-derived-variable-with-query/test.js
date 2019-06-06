import orig from './ProductionPlan'
import refactor from './ProductionPlan-refac'
const implMap = new Map([['refactor', orig], ['refactor', refactor]]);

let assert = require('chai').assert;

describe('Replace derived variable with query', function () {

    implMap.forEach(function (ProductionPlan, implName) {
        it(implName + ' get production', function () {
            let productionPlan = new ProductionPlan();
            productionPlan.applyAdjustment(5);
            productionPlan.applyAdjustment(7);

            assert.equal(productionPlan.production, 12);
        });
    });


});