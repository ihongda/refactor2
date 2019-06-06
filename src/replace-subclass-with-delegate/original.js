export default function buildBooking(data) {
    switch (data.type) {
        case "R": return new Booking(data.show, data.date);
        case "P": return new PremiumBooking(data.show, data.date, data.extras);
        default:
            throw new Error("Invalid type " + data.type);
    }
}

const PEAK_DAY_PREMIUM = 0.15;

class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback') && this.notPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * PEAK_DAY_PREMIUM);
        return result;
    }

    get notPeakDay() {
        return !this.isPeakDay;
    }

    get isPeakDay() {
        return this._date.isPeakDay;
    }
}

class PremiumBooking extends Booking {
    constructor(show, date, extras) {
        super(show, date);
        this._extras = extras;
    }

    get basePrice() {
        return Math.round(super.basePrice + this._extras.premiumFee);
    }

    get hasTalkback() {
        return this._show.hasOwnProperty('talkback');
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && this.notPeakDay;
    }

}