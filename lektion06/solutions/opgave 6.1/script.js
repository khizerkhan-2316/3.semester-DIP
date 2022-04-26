/* Lav et array med en række person objekter. Hver person skal have et navn, en alder og et mobilnummer. Løs nedenstående vha. arrays højere ordens metoder. */

let persons = [
  { name: 'Anders Mikkelsen', age: 22, mobile: '88 66 45 32' },
  { name: 'Lars Petersen', age: 25, mobile: '32 88 88 88 ' },
  { name: 'Fie Andersen', age: 45, mobile: '43 65 43 63 ' },
  { name: 'Florentina Michealsen', age: 32, mobile: '46 23 47 86' },
  { name: 'Jens Larsen', age: 43, mobile: '65 48 53 36 ' },
  { name: 'Mikkel Søndersen', age: 56, mobile: '46 36 45 24 ' },
];

const personWithMobile = persons.find(
  (person) => person.mobile === '88 66 45 32'
);

const lowestAge = Math.min(...persons.map((person) => person.age));

console.log(lowestAge);

persons = persons.map((person, index) => {
  return { id: index, ...person };
});

console.log(persons);

const names = persons
  .map((person) => person.name)
  .sort()
  .join(', ');

console.log(names);

const nameandCell = persons
  .filter((person) => person.mobile.length <= 11)
  .map((person) => {
    return { name: person.name, mobile: person.mobile };
  });

console.log(nameandCell);
