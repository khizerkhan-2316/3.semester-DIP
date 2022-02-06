const data = [
  [2, 70, 1],
  [1.5, 8, 2],
  [1, 1, 2],
  [2.1, 2.5, 1],
  [1.94, 39, 2],
  [2.1, 25, 1],
  [1.94, 39, 2],
  [2.11, 68, 1],
  [2.5, 75, 1],
  [2.0, 25, 1],
  [1.87, 23, 3],
  [0.15, 100, 1],
  [0.14, 14, 1],
  [1.79, 26, 1],
  [1.9, 18, 1],
  [2.1, 24, 1],
  [1.75, 25, 1],
  [1.9, 30, 1],
  [1.98, 20, 1],
  [1.6, 87, 1],
  [1.68, 24, 2],
];

const middleValue = (data, index) => {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j <= 1; j++) {
      sum += data[i][index];
    }
  }

  return sum / data.length;
};

const middleValueKøn = (data, index, køn) => {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let element = data[i][2];

      if (element === køn) {
        sum += data[i][index];
        count++;
      }
    }
  }

  return sum / count;
};
console.log('Middelværdi for højde: ' + middleValue(data, 0));
console.log('Middelværdi for alder: ' + middleValue(data, 1));

console.log('Middelværdi for alder køn 1: ' + middleValueKøn(data, 1, 1));
console.log('Middelværdi for alder køn 2: ' + middleValueKøn(data, 1, 2));
console.log('Middelværdi for alder køn 3: ' + middleValueKøn(data, 1, 3));
