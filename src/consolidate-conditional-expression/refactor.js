const DISABILITY_PAY_PERCENT = .75;
const INELIGIBLE_DISABILITY_AMOUNT = 0;

export default function disabilityAmount(employee) {
    if (isEligibleForDisability(employee)) {
        return employee.salary * DISABILITY_PAY_PERCENT;
    }

    return INELIGIBLE_DISABILITY_AMOUNT;
}

function isEligibleForDisability(employee) {
    return employee.seniority > 1 &&
           employee.monthsDisabled <= 12 &&
           !employee.isPartTime;
}