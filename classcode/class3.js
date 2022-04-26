// class3.js
class Person {
    constructor(navn) {
        this.#navn = navn;
        Person.#antal++;
    }
    #navn;
    static #antal = 0;
    toString() { return 'Person: ' + this.#navn; };
    getNavn() { return this.#navn; }
    static getAntal() { return Person.#antal }
}

let person = new Person('Viggo');
console.log(person.getNavn()); // => Viggo
console.log(Person.getAntal()); // => 1
console.log(person.toString()); // => Person: Viggo