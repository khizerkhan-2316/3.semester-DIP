function Person(navn) {
  this.navn = navn;
}
Person.prototype.sayHello = function () {
  return this.navn + ' says hello';
};

function Student(navn, emne) {
  Person.call(this, navn); // Call Person with resolving this to current object remember this={}
  this.emne = emne;
}

Student.prototype = Object.create(Person.prototype); //object med Person.prototype som [[Prototype]]
Student.prototype.constructor = Student;

let s = new Student('Hans', 'Math');
console.log(s.sayHello());
console.log(s.emne);
let ss = new s.constructor('Gert', 'english');
console.log(ss.sayHello());
console.log(ss.emne);
