// opgave8.3.js
function compareSort(compare) {
    if (typeof compare !== 'function') throw Error('Ikke en funktion');
    if (compare.length !== 2) throw Error('Funktion har ej 2 parametre');
    if (arguments.length > 1) throw Error('For mange argumenter');
    return function (array) {
        if (!Array.isArray(array)) throw Error('Ikke et array');
        if (arguments.length > 1) throw Error('For mange argumenter');
        return array.sort(compare);
    }
}

function compare(s1, s2) {
    if (s1 < s2)
        return -1;
    else if (s1 > s2)
        return 1;
    else return 0;
}

function compareLen(s1, s2) {
    return compare(s1.length, s2.length);
}

function compareIgnore(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
}

const lenSort = compareSort(compareLen);
const ignoreCaseSort = compareSort(compareIgnore);

let list = ['abe', 'KATTE', 'abekat', 'ABE'];
console.log('list: ' + list.toString());
console.log('compare: ' + compareSort(compare)(list));
console.log('compareLen: ' + lenSort(list));
console.log('compareIgnore: ' + ignoreCaseSort(list));

// compareSort();
// compareSort('compare');
// compareSort(compare, list);
// ignoreCaseSort();
// ignoreCaseSort('array');
// ignoreCaseSort(list, 123);