import Reading from './Reading';

function baseRate(reading) {
    return TaxTables.baseRate(reading.month, reading.year);
}

export default function calcTotalTax(rawReading) {
    let reading = new Reading(rawReading);
    return reading.taxableCharge;
}