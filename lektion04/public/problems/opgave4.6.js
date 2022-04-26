const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const heading = document.createElement('h1');
heading.innerHTML = 'Mountains';
heading.style.color = 'red';
heading.style.fontSize = '50px';

const container = document.querySelector('div');

container.appendChild(heading);

const table = document.createElement('table');
table.style.border = '3px solid blue';

container.appendChild(table);

const firstTableRow = document.createElement('tr');

for (let name in MOUNTAINS[0]) {
  const tableHeader = document.createElement('th');

  tableHeader.innerHTML = name;

  firstTableRow.appendChild(tableHeader);
}

table.appendChild(firstTableRow);

MOUNTAINS.forEach((object) => {
  const tableRow = document.createElement('tr');
  tableRow.style.border = '1px solid blue';
  for (let key in object) {
    const tableData = document.createElement('td');

    tableData.innerHTML = object[key];
    tableData.style.border = '3px solid blue';

    tableRow.appendChild(tableData);
  }

  table.appendChild(tableRow);
});
