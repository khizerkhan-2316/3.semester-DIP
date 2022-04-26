// chaining.js
let personer = [{name: 'John Doe', age: 32}, {name: 'Jane Doe', age: 23}];

console.log(personer.map(p => p.age).reduce((a, e) => a + e)); // => 55

console.log(personer.sort((p1, p2) => p1.age-p2.age).map(p => p.name));
// [ 'Jane Doe', 'John Doe' ]

console.log(personer.find(p => p.name === 'Jane Doe').age); // => 23

