function renderPerson(person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}

function photoDiv(p) {
    return ["<div>", emitPhotoData(p), "</div>",].join("\n");
}

function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>title: ${aPhoto.title}</p>`);
    result.push(`<p>location: ${aPhoto.location}</p>`);
    result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
}

let refactor = {renderPerson: renderPerson, photoDiv: photoDiv};

export {refactor};