import createBird from "./Bird";

function plumage(birdData) {
    let bird = createBird(birdData);
    return bird.plumage;
}

function airSpeedVelocity(birdData) {
    let bird = createBird(birdData);
    return bird.airSpeedVelocity;
}

let refactor = {plumage: plumage, airSpeedVelocity: airSpeedVelocity};

export { refactor };