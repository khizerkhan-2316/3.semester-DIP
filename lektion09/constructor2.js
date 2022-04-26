// constructor2.js
function Person(navn) {
    this.navn = navn;
}
Person.prototype.toString = function () { return 'Person: ' + this.navn; }

let person = new Person('Viggo');
console.log(person.navn); // => Viggo
console.log(person.toString()); // => Person: Viggo
console.log(person.constructor.name); // => Person
console.log(person instanceof Person); // => Person
console.log(typeof person.constructor); // => function
console.log(typeof Person.prototype); // => object