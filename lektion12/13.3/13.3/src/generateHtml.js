function generateHtml(messageHtml) {
    return messageHtml.reduce((prev, cur) => prev + " " + cur, '<html><body>') + "</body></html>"
}

function generateMessageHTML(message) {
    let html = '';
    html += `<div><div>${message.id}</div><div>${message.text}</div><div>${message.receiver}</div><div>${message.sender}</div></div>`;
    return html;
}

function generateDocument(messages) {
    return generateHtml(messages.map(m => generateMessageHTML(m)))
}

export default generateDocument