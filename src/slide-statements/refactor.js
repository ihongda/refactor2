
let allocatedResources = [];
let availableResources = [];
let count = 0;

function getInstance() {
    let result;
    if (availableResources.length === 0) {
        result = createResource();
    } else {
        result = availableResources.pop();
    }
    allocatedResources.push(result);
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

let refactor = {getInstance: getInstance,
                returnInstance: returnInstance,
                allocatedResourcesCount: allocatedResourcesCount};

export {refactor};
