import OrigOrder from './Order'
import RefacOrder from './Order-refac'
import CustomerRepo from "./CustomerRepo";

let assert = require('chai').assert;

let customer = { id: 1, name: "Tom" };

let data = { id: 1, customer: customer };
let customerRepo = new CustomerRepo();

describe('Change value to reference', function () {
    it('Original updates not propagated', function () {
        let order = new OrigOrder(data);
        customer.name = "John";

        assert.equal(order.customer.name, "Tom");
    });
    it('Refactor updates are propagated', function () {
        let saveCustomer = customerRepo.save(customer);
        let order = new RefacOrder(data, customerRepo);

        saveCustomer.name = "John";
        assert.equal(order.customer.name, "John");
    });
});