let b = [0, 1];
b[4] = 4;
console.log(b); // => [ 0, 1, <2 empty items>, 4 ]
console.log(b.toString()); // => 0,1,,,4
console.log(b.length); // => 5
b.length = 6
console.log(b)
b.length = 1
console.log(b)
