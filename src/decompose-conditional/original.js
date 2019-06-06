export default function calcCharge(travel, plan) {
    let charge = 0;

    if (travel.date >= plan.summerStart && travel.date <= plan.summerEnd) {
        charge = travel.quantity * plan.summerRate;
    } else {
        charge = travel.quantity * plan.regularRate + plan.regularServiceCharge;
    }

    return charge;
}