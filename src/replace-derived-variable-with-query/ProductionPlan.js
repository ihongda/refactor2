export default class ProductionPlan {

    constructor() {
        this._production = 0;
        this._adjustments = [];
    }

    get production() {
        return this._production;
    }

    applyAdjustment(adjustment) {
        this._adjustments.push(adjustment);
        this._production += adjustment;
    }
}