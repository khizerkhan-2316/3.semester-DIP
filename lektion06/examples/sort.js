// sort.js
let numbers = [30, 4, 10, 2, 0];

console.log(numbers.sort()); // => [ 0, 10, 2, 30, 4 ]
console.log(numbers); // => [ 0, 10, 2, 30, 4 ]

numbers.sort((a, b) => a-b);
console.log(numbers); // => [ 0, 2, 4, 10, 30 ]

numbers.sort((a, b) => b-a);
console.log(numbers); // => [ 30, 10, 4, 2, 0 ]
