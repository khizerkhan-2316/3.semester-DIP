// opgave8.2.js
function compareSort(compare) {
    return function(array){
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

let list = ['abe', 'KATTE','abekat','ABE'];
console.log('list: ' + list.toString());
console.log('compare: ' + compareSort(compare)(list));
console.log('compareLen: ' + lenSort(list));
console.log('compareIgnore: ' + ignoreCaseSort(list));