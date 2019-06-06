import CustomerData from "./CustomerData";

function compareUsage (customerData, customerID, laterYear, month) {
    let customer = new CustomerData(customerData);
    return customer.compareUsage(customerID, laterYear, month);
}

function setUsage(customerData, customerId, year, month, amount) {
    let customer = new CustomerData(customerData);
    customer.usage(customerId, year, month, amount);
}

let refactor = {compareUsage: compareUsage, setUsage: setUsage};

export { refactor }