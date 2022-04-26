// map.js
let numbers = [1, 2, 3, 4, 5];

let numbersMinus1 = numbers.map(element => element - 1);
console.log(numbersMinus1); // => [ 0, 1, 2, 3, 4 ]

let numbersSquare = numbers.map(Math.pow);
console.log(numbersSquare); // => [ 1, 2, 9, 64, 625 ]

let numbersEven = numbers.map(element => element % 2 == 0);
console.log(numbersEven); // => [ false, true, false, true, false ]
