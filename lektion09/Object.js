// Object.js
let o = new Object();
o.x = 1;
console.log(o.toString()) // => [object Object]
console.log(o.constructor); // => [Function: Object]
console.log(Object.prototype === Object.getPrototypeOf(o)); // => true
console.log(o instanceof Object); // => true
