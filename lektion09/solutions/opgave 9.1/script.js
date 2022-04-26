console.log('Running');

const vehicle = {
  speed: 100,
};

const car = {
  numberOfWheels: 4,
  gasDriven: false,
};

const bicycle = {
  numberOfWheels: 2,
};

Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(bicycle, vehicle);

vehicle.toString = function () {
  return 'Vehichle: ' + 'Speed: ' + this.speed;
};

car.toString = function () {
  return (
    'Car: Speed: ' +
    this.speed +
    ', Number of wheels:  ' +
    this.numberOfWheels +
    ', Gasdriven: ' +
    this.gasDriven
  );
};

bicycle.toString = function () {
  return (
    'Bicycle: ' +
    ' Speed: ' +
    this.speed +
    ', Number of wheels: ' +
    this.numberOfWheels
  );
};

console.log(vehicle.toString());
console.log(car.toString());
console.log(bicycle.toString());

car.speed = 250;

bicycle.speed = 30;
console.log('/////');
console.log('/////');

console.log(vehicle.toString());
console.log(car.toString());
console.log(bicycle.toString());

Object.setPrototypeOf(bicycle, Object);

console.log('/////');
console.log('/////');

console.log(bicycle.toString());

console.log('/////');
console.log('/////');

Object.setPrototypeOf(car, Object);
console.log(car.toString());
