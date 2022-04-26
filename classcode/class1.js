// class1.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return 'Person: ' + this.navn; };
}

let person = new Person('Viggo');
console.log(person.navn); // => Viggo
console.log(person.toString()); // => Person: Viggo
console.log(person.constructor.name); // => Person
console.log(typeof person.constructor); // => function
console.log(typeof Person.prototype); // => object