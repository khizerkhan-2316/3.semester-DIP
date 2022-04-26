function generateHtml(usersTags) {
    return usersTags.reduce((prev, cur) => prev + " " + cur, '<html><body>') + "</body></html>"
    //return `<html><body>${ofHtml}</body></html>`
}

function generateUser(user) {
    let html = '';
    html += `<div><div>${user.id}</div><div>${user.name}</div><div>${user.username}</div></div>`;
    return html;
}

function generateDocument(users) {
    return generateHtml(users.map(u => generateUser(u)))
}

export default generateDocument