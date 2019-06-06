export default function buildBooking(data) {
    switch (data.type) {
        case "R": return new Booking(data.show, data.date);
        case "P":
            let premiumBooking = new Booking(data.show, data.date);
            premiumBooking._bePremium(data.extras);
            return premiumBooking;
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

    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }

    get hasTalkback() {
        return (this._premiumDelegate) ?
            this._premiumDelegate.hasTalkback :
            this._show.hasOwnProperty('talkback') && this.notPeakDay;
    }

    get basePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * PEAK_DAY_PREMIUM);
        if (this._premiumDelegate) result = this._premiumDelegate.addPremium(result);
        return result;
    }

    get notPeakDay() {
        return !this.isPeakDay;
    }

    get isPeakDay() {
        return this._date.isPeakDay;
    }

    get hasDinner() {
        return (this._premiumDelegate) ?
            this._premiumDelegate.hasDinner :
            false;
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking,  extras) {
        this._hostBooking = hostBooking;
        this._extras = extras;
    }

    addPremium(basePrice) {
        return Math.round(basePrice + this._extras.premiumFee);
    }

    get hasTalkback() {
        return this._hostBooking._show.hasOwnProperty('talkback');
    }

    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') &&
               this._hostBooking.notPeakDay;
    }

}