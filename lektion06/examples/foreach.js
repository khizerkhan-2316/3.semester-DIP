// foreach.js
let numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(element => sum += element);
console.log(sum); // => 15

numbers.forEach((element) => element++);
console.log(tal); // => [ 1, 2, 3, 4, 5]

numbers.forEach((element, index, array) => array[index]++);
console.log(tal); // => [ 2, 3, 4, 5, 6]
