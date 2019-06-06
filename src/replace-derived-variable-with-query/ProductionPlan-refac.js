export default class ProductionPlan {

    constructor() {
        this._adjustments = [];
    }

    get production() {
        return this._adjustments.reduce((sum, adjustment) => sum + adjustment, 0);
    }

    applyAdjustment(adjustment) {
        this._adjustments.push(adjustment);
        this._production += adjustment;
    }
}