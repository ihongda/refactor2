function isSummer(travel, plan) {
    return travel.date >= plan.summerStart && travel.date <= plan.summerEnd;
}

function summerCharge(travel, plan) {
    return travel.quantity * plan.summerRate;
}

function regularCharge(travel, plan) {
    return (travel.quantity * plan.regularRate) + plan.regularServiceCharge;
}

export default function calcCharge(travel, plan) {

    if (isSummer(travel, plan)) {
        return summerCharge(travel, plan);
    } else {
        return regularCharge(travel, plan);
    }
}