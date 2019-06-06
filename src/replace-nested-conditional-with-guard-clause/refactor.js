function adjustmentNotApplicable(instrument) {
    return instrument.capital <= 0      ||
           instrument.interestRate <= 0 ||
           instrument.duration <= 0;
}

export default function adjustedCapital(instrument) {
    if (adjustmentNotApplicable(instrument)) {
        return 0;
    }

    return (instrument.income / instrument.duration) * instrument.adjustmentFactor;
}