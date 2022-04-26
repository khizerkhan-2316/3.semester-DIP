// polymorfi.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Person: ' + this.navn; };
}
class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let kat = new Kat('Garfield');
let person = new Person('Viggo');

for (o of [kat, person])
    console.log(o.toString());
// => Kat: Garfield
// => Person: Viggo
