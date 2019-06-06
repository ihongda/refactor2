export default class TaxTables {

    static baseRate(month, year) {
        return 0.1;
    }

    static taxThreshold(year) {
        return 10;
    }
}

