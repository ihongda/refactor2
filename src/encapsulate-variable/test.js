let assert = require('chai').assert;

const martin = {firstName: "Martin", lastName: "Fowler"};
const rebecca = {firstName: "Rebecca", lastName: "Parsons"};

describe('Original Encapsulate Variable', function () {

    let spaceShip = {};

    it('Should access fields directly', function () {
        let defaultOwner = martin;
        spaceShip.owner = defaultOwner;

        defaultOwner = rebecca;

        assert.deepEqual(spaceShip.owner, martin);
        assert.deepEqual(defaultOwner, rebecca);
    });
});

describe('Refactor Encapsulate Variable', function () {

    let spaceShip = {};
    let defaultOwner = {};

    function getDefaultOwner() {
        return Object.assign({}, defaultOwner);
    }

    function setDefaultOwner(arg) {
        defaultOwner = arg;
    }

    it('Should access encapsulated variables', function () {
        setDefaultOwner(martin);
        spaceShip.owner = defaultOwner;

        setDefaultOwner(rebecca);

        assert.deepEqual(spaceShip.owner, martin);
        assert.deepEqual(getDefaultOwner(), rebecca);
    });

    it('Should return copied default owner', function () {
        setDefaultOwner(martin);
        let otherOwner = getDefaultOwner();
        otherOwner.firstName = "Fred";

        assert.deepEqual(otherOwner, {firstName: "Fred", lastName: "Fowler"});
        assert.deepEqual(getDefaultOwner(), martin);
    });
});