// class2.js
class Person {
    constructor(navn) {
        this.navn = navn;
        Person.antal++;
    }
    static antal = 0;
    toString() { return 'Person: ' + this.navn; };
}

let person = new Person('Viggo');
console.log(person.navn); // => Viggo
console.log(Person.antal); // => 1
console.log(person.toString()); // => Person: Viggo