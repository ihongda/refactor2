export default class OutStream {

    constructor() {
        this._results = [];
    }


    get results() {
        return this._results;
    }

    write(output) {
        this._results.push(output);
    }
}