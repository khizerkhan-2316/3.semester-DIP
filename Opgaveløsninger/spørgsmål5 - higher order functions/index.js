const Car = require('./Car.js');
const randomText = (textArray) => {
  return function () {
    const random = Math.floor(Math.random() * textArray.length);

    return textArray[random];
  };
};

const colors = ['red', 'green', 'yellow', 'blue'];
const models = ['xy', 'ds 52', 'ds4', 'ds5', 'ds6'];

const randomColor = randomText(colors);

const randomCars = (cars, randomColorText, randomModelText) => {
  let carsArray = [];

  for (let i = 1; i <= cars; i++) {
    const randomColor = randomText(randomColorText)();
    const randomModelTxt = randomText(randomModelText)();
    carsArray.push(new Car(randomModelTxt, randomColor));
  }

  return carsArray;
};

console.log(randomCars(5, colors, models));
