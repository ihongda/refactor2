function compareUsage (customerData, customerID, laterYear, month) {
    const later   = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

function setUsage(customerData, customerId, year, month, amount) {
    customerData[customerId].usages[year][month] = amount;
}

let original = {compareUsage: compareUsage, setUsage: setUsage};

export { original }