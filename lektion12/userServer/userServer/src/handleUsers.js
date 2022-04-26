import fetch from 'node-fetch'

async function getUsers(url) {
    const response = await fetch(url)
    if (!response.ok) {
        let e = new Error()
        e.status = 500
        throw e
    }
    return response.json()
}

function generateTable(users) {
    let html = '<table>';
    for (let u of users) {
        html += '<tr><td>' + u.id + '</td><td>' + u.name +
            '</td><td>' + u.company.name + '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

function generateHtml(users) {
    return `<html><body>${generateTable(users)}</body></html>`
}

export {getUsers, generateHtml}
