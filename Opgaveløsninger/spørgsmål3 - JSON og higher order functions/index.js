const persons = `[{"navn": "Anders Madsen","vaegtNu": 60,"vaegtFoer": 80}, {"navn": "Lars Tønder","vaegtNu": 99,"vaegtFoer": 72}, {"navn": "Line Petersen","vaegtNu": 55,"vaegtFoer": 70} ]`;

const personsArray = JSON.parse(persons);

// navne:

const names = personsArray.map((person) => person.navn);

const weightLoss = personsArray
  .filter((person) => person.vaegtNu < person.vaegtFoer)
  .map((person) => person.navn);

const biggestWeight = personsArray.reduce((acc, person) => {
  return (acc = acc > person.vaegtNu ? acc : person.vaegtNu);
}, 0);

const gennemsnit = personsArray.filter(
  (person) => person.vaegtNu < person.vaegtFoer
);

const gennemSnitVægtTab =
  gennemsnit.reduce(
    (acc, person) => person.vaegtFoer - person.vaegtNu + acc,
    0
  ) / gennemsnit.length;
console.log(names);

console.log(weightLoss);

console.log(biggestWeight);

console.log('Gennemsnits weight loss: ' + gennemSnitVægtTab);
