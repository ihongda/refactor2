let LocalDate = require('js-joda').LocalDate;
let ChronoUnit = require('js-joda').ChronoUnit;

export default function buildScroll(data) {
    return new Scroll(data.catalog.id,
                      data.catalog.title,
                      data.catalog.tags,
                      data.dateLastCleaned);
}

class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTag(arg) {
        return this._tags.includes(arg);
    }
}

class Scroll extends CatalogItem {
    constructor(id, title, tags, dateLastCleaned) {
        super(id, title, tags);
        this._lastCleaned = LocalDate.parse(dateLastCleaned);
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        let date = LocalDate.parse(targetDate);
        return this._lastCleaned.until(date, ChronoUnit.DAYS);
    }
}