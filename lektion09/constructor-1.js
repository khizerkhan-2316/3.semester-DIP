function Person(navn) {
  this.navn = navn;
  this.toString = function () {
    return 'Person:' + this.navn;
  };
}
let person = new Person('Viggo');
console.log(person.navn); // Viggo
console.log(person.toString()); // Person: Viggo
