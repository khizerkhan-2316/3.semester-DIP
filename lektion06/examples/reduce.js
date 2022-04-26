// reduce.js
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((akkumulator, element) =>
    akkumulator + element);
console.log(sum); // => 15

let sumPlus100 = numbers.reduce((akkumulator, element) =>
    akkumulator + element, 100);
console.log(sumPlus100); // => 115

let max = numbers.reduce((akkumulator, element) =>
    akkumulator > element ? akkumulator : element);
console.log(max); // => 5
