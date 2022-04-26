function generateHtml(ofHtml) {
    return `<html><body>${ofHtml}</body></html>`
}

function generateLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>';
    }
    return html;
}

function generateDocument(fileNames) {
    return generateHtml(generateLinks(fileNames))
}

export default generateDocument