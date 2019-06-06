
let allocatedResources = [];
let availableResources = [];
let count = 0;

function getInstance() {
    let result;
    if (availableResources.length === 0) {
        result = createResource();
        allocatedResources.push(result);
    } else {
        result = availableResources.pop();
        allocatedResources.push(result);
    }
    return result;
}

function returnInstance(instance) {
    allocatedResources = allocatedResources.filter(
        (element) => element !== instance
    );
    availableResources.push(instance);
}

function allocatedResourcesCount() {
    return allocatedResources.length;
}

function createResource() {
    count++;
    return "resource" + count;
}

let original = {getInstance: getInstance,
                returnInstance: returnInstance,
                allocatedResourcesCount: allocatedResourcesCount};

export {original};
