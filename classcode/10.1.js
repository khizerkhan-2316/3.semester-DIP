// specialisering.js
class Person {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return this.navn;
  }

  equals(p) {
    return this.navn === p.navn && this.constructor === p.constructor;
  }

  static compareTo(p1, p2) {
    return p1.navn === p2.navn ? 0 : p1.navn < p2.navn ? -1 : 1;
  }
}
class Studerende extends Person {
  constructor(navn, id) {
    super(navn);
    this.id = id;
  }
  toString() {
    return super.toString() + ': ' + this.id;
  }

  equals(s) {
    return (
      this.navn === s.navn &&
      this.id === s.id &&
      this.constructor === s.constructor
    );
  }
}

class Kat {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return 'Kat: ' + this.navn;
  }
}

let person1 = new Person('Higgo');
const studerende1 = new Studerende('Lars', 423);
let person = new Person('Viggo');
let studerende = new Studerende('Idafsf', 123);
/*

console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true

console.log('Er person og person1 det samme? ' + person.equals(person1));
console.log(
  'Er studerende og studerende 1 equals? ' + studerende.equals(studerende1)
);

console.log('Result of compare: ' + Person.compareTo(studerende, person));
 */

const persons = [];

persons.push(person);
persons.push(studerende);
persons.push(person1);
persons.push(studerende1);

//console.log(persons);
// sort with Persons comapreto method.
persons.sort((a, b) => Person.compareTo(a, b));

console.log(persons);

persons.push(new Kat('Lenny'));
persons.push(new Kat('Anders'));

console.log(persons);

persons.sort((a, b) => Person.compareTo(a, b));
console.log(persons);
