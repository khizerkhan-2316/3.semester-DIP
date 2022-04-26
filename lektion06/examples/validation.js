//validation.js
function max(...elementer) {
    if (elementer.length === 0) {
        throw new Error('No data');
    }
    let type = typeof elementer[0];

    if (!['number', 'string'].includes(type)) {
        throw new Error('Wrong type');
    }
    if (!elementer.every(e => typeof e === type)) {
        throw new Error('Not same type');
    }
    if (type === 'number')
        return elementer.reduce((a, e) => a > e ? a : e);
    else
        return elementer.reduce((a, e) => a.localeCompare(e) > 0 ? a : e);
}

//console.log(max(3, 7, 6, 9, 44, 77, 99, 22, 3, 4, 5, 6, 7))
//console.log(max("e", "ælkk", "hjg", "ælk", "k", "j"))
//console.log(max("e", 8, "hjg", "ælk", "k", "j"))
console.log(max(true, "8", true, "ælk", "k", "j"))