import original from './original';
import refactor from './refactor';
const implMap = new Map([['original', original], ['refactor', refactor]]);

let assert = require('chai').assert;

let booking = {
    type: "R",
    show: { talkback: true, dinner: true, price: 50},
    date: { isPeakDay: false}
};

let bookingPremiumFee = {
    type: "P",
    show: { talkback: true, dinner: true, price: 50},
    date: { isPeakDay: false},
    extras: { dinner: true, premiumFee: 10 }
};

let bookingPeakNoDinnerNoTalkback = {
    type: "P",
    show: { price: 60},
    date: { isPeakDay: true},
    extras: { premiumFee: 5 }
};

describe('Replace Subclass with Delegate', function () {
    implMap.forEach(function (buildBooking, implName) {
        it(implName + ' normal booking', function () {
            let seatBooking = buildBooking(booking);
            assert.equal(seatBooking.basePrice, 50);
            assert.equal(seatBooking.hasTalkback, true);
        });
        it(implName + ' premium booking', function () {
            let seatBooking = buildBooking(bookingPremiumFee);
            assert.equal(seatBooking.basePrice, 60);
            assert.equal(seatBooking.hasTalkback, true);
            assert.equal(seatBooking.hasDinner, true);
        });
        it(implName + ' premium booking no dinner, talkback', function () {
            let seatBooking = buildBooking(bookingPeakNoDinnerNoTalkback);
            assert.equal(seatBooking.basePrice, 74);
            assert.equal(seatBooking.hasTalkback, false);
            assert.equal(seatBooking.hasDinner, false);
        });
    });
});
