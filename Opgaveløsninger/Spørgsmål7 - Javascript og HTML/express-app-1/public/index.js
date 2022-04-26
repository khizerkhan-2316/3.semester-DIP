const table = document.querySelector('table');
let persons = [
  {
    name: 'Anders Mikkelsen',
    age: 22,
  },

  {
    name: 'Lars Petersen',
    age: 25,
  },

  {
    name: 'Mikkel Larsen',
    age: 30,
  },

  {
    name: 'Line Mikkelsen',
    age: 53,
  },

  {
    name: 'Fiona Sørensen',
    age: 23,
  },
];

const insertDataInTable = (persons, node) => {
  persons.forEach((person) => {
    const { name, age } = person;
    createRow(name, age, node);
  });
};

const createRow = (name, age, node) => {
  const tablerow = document.createElement('tr');

  const tdName = document.createElement('td');

  const tdAge = document.createElement('td');

  tdName.innerHTML = name;
  tdAge.innerHTML = age;

  tdName.addEventListener('click', (e) => {
    removeRow(e);
  });

  tablerow.appendChild(tdName);
  tablerow.appendChild(tdAge);

  node.appendChild(tablerow);
};

document.addEventListener('DOMContentLoaded', () => {
  insertDataInTable(persons, table);
  createTableFooter(persons, table);
});

const createTableFooter = (persons, node) => {
  const tableFooter = document.createElement('tfoot');
  const tableRow = document.createElement('tr');
  const averageAgeHeadingTd = document.createElement('td');

  averageAgeHeadingTd.innerHTML = 'Average Age:';
  const averageAgeTd = document.createElement('td');
  averageAgeTd.classList.add('average-age');
  averageAgeTd.innerHTML = calculateAverageAge(persons);

  tableFooter.appendChild(tableRow);
  tableRow.appendChild(averageAgeHeadingTd);
  tableRow.appendChild(averageAgeTd);
  node.appendChild(tableFooter);
};

const calculateAverageAge = (persons) => {
  return Math.floor(
    persons.reduce((sum, person) => sum + person.age, 0) / persons.length
  );
};

const removeRow = (e) => {
  const name = e.target.innerHTML;
  persons = persons.filter((person) => person.name != name);
  const rowIndex = e.target.parentNode.rowIndex;
  table.deleteRow(rowIndex);

  const tableFooter = document.querySelector('tfoot');

  const tableRow = tableFooter.childNodes;

  const td = tableRow[0].childNodes[1];

  persons.length !== 0
    ? (td.innerHTML = calculateAverageAge(persons))
    : (td.innerHTML = '0');
};
