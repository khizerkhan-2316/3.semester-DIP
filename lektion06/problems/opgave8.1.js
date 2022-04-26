// opgave8.1.js
let personer = [
    { navn: 'Ole', alder: 25, mobil: 12345678 },
    { navn: 'Ida', alder: 19, mobil: 23456789 },
    { navn: 'Ask', alder: 32, mobil: 34567890 }
]
console.log(personer
    .find(person => person.mobil === 23456789));

console.log(personer
    .map(person => person.alder)
    .reduce((minimum, alder) => alder < minimum ? alder : minimum));

personer.forEach((person, index) => person.id = index + 1);
console.log(personer);

console.log(personer
    .map(person => person.navn)
    .sort()
    .reduce((navne, navn) => navne += ', ' + navn));

console.log(personer
    .filter(person => person.alder < 30)
    .map(person => ({navn: person.navn, mobil: person.mobil})));