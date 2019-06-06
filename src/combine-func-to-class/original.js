import TaxTables from './TaxTables';

function baseRate(reading) {
    return TaxTables.baseRate(reading.month, reading.year);
}

export default function calcTotalTax(reading) {
    let baseCharge = baseRate(reading) * reading.quantity;
    let thresholdTax = TaxTables.taxThreshold(reading.year);
    return Math.max(0, baseCharge - thresholdTax);
}