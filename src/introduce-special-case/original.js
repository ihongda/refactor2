export default function getCustomerInfo(site) {
    const customer = site.customer;
    let info = {};

    if (customer === "unknown") {
        info.name = "occupant";
    } else {
        info.name = customer.name;
    }

    return info;
}
