let a = [0, 'en', true, null, undefined, [7, 9, 13]];
console.log(a); // [ 0, 'en', true, null, undefined, [ 7, 9, 13 ] ]
console.log(a['1']); // en
console.log(a[5]); // [7, 9 13]
console.log(a[6]); // undefined