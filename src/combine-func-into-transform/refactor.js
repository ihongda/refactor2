import TaxTables from './TaxTables';
import _ from 'lodash';

function calculateBaseCharge(reading) {
    return TaxTables.baseRate(reading.month, reading.year)  * reading.quantity;
}

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - TaxTables.taxThreshold(result.year));
    return result;
}

function calcTotalTax(reading) {
    let aReading = enrichReading(reading);
    return aReading.taxableCharge;
}

export { calcTotalTax, enrichReading }