export default function printOwing(invoice, console, clock) {
    printBanner(console);
    const outstanding = calculateOutstanding(invoice);

    recordDueDate(clock, invoice);

    printDetails(invoice, outstanding, console);
}

function calculateOutstanding(invoice) {
    return invoice.orders.map((invoice) => invoice.amount)
                         .reduce((total, amount) => total + amount);
    // let results = 0;
    // for (const o of invoice.orders) {
    //     results += o.amount;
    // }
    // return results;
}

function recordDueDate(clock, invoice) {
    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding, console) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner(console) {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}
