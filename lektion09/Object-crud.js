// Object.js
let o = new Object();
o.x = 1;
console.log(o.toString()) // => [object Object]
console.log(o.constructor); // => [Function: Object]
console.log(Object.prototype === Object.getPrototypeOf(o)); // => true

Object.prototype.toString = () => 'overskrevet';
console.log(o.toString()); // 'overskrevet
delete Object.prototype.toString;
console.log(o.toString()); // => TypeError: o.toString is not a function
console.log(o.toString); // => undefined
Object.prototype.prototype = function () { return Object.getPrototypeOf(this)};
console.log(o.prototype() === Object.prototype); // => true