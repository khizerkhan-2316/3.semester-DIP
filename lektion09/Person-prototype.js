function Person(name) {
    this.name = name
}
Person.prototype.toString = function () {
    return "Name: " + this.name;
}
let person = new Person("hans")

console.log(person.toString()) // ->Name: hans

console.log(Object.getPrototypeOf(person).toString()) // ->Name: undefined   Why???

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(person))) // -> [ 'constructor', 'toString' ]

console.log(Object.getPrototypeOf(person)===Person.prototype)  // -> true

console.log(Object.getPrototypeOf(Object.getPrototypeOf(person))===Object.prototype)  // -> true
