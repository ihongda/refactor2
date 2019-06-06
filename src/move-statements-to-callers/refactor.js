function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location}</p>\n`);
}

function renderPhoto(outStream, photo) {
    outStream.write(`<div>${photo.img}</div>div>`);
}

function listRecentPhotos(outStream, photos) {
    photos.filter(p => p.hasOwnProperty("img")).forEach(p => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write(`<p>location: ${p.location}</p>\n`);
        outStream.write("</div>\n");
    });
}

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

let refactor = {renderPerson: renderPerson,
                listRecentPhotos: listRecentPhotos};

export {refactor};