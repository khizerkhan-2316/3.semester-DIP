// filter.js
let numbers = [1, 2, 3, 4, 5];

let lessThan3 = numbers.filter(element => element < 3);
console.log(lessThan3); // => [ 1, 2 ]

let even = numbers.filter(element => element % 2 == 0);
console.log(even); // => [ 2, 4 ]

