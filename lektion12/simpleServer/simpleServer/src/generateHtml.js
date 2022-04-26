function generateHtml(ofHtml) {
    return `<html><body>${ofHtml()}</body></html>`
}

function generateLinks(filnavne) {
    console.log("gedsfgfgInks" + filnavne)
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>';
    }
    return html;
}

export {generateHtml, generateLinks}