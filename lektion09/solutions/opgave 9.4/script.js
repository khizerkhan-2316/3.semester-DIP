console.log('Running');

function Animal(lifespan) {
  this.lifespan = lifespan;
}

Animal.prototype.getLifespanInMonths = function () {
  return this.lifespan * 12;
};

function Vertebrate(spinelength) {
  this.spinelength = spinelength;
}

Vertebrate.prototype = Object.create(Animal.prototype);
Vertebrate.prototype.constructor = Vertebrate;
Vertebrate.prototype.getSpinelengthInCentimeters = function () {
  return this.spinelength * 1000;
};

function Mamel(numberOfLegs) {
  this.numberOfLegs = numberOfLegs;
}

Mamel.prototype = Object.create(Vertebrate.prototype);
Mamel.prototype.constructor = Mamel;
Mamel.prototype.isNumberOfLegsEven = function () {
  return this.numberOfLegs % 2 === 0;
};

function Horse(speed) {
  this.speed = speed;
}

Horse.prototype = Object.create(Mamel.prototype);
Horse.prototype.constructor = Horse;
Horse.prototype.getSpeedInMetersPrSecond = function () {
  return (this.speed * 1000) / 60 / 60;
};

const animal = new Animal(50);

const vertebrate = new Vertebrate(10);

const mamel = new Mamel(4);

const horse = new Horse(50);

console.log(horse instanceof Mamel);
console.log(mamel instanceof Vertebrate);
console.log(vertebrate instanceof Animal);

console.log(animal.getLifespanInMonths());
console.log(vertebrate.getSpinelengthInCentimeters());
console.log(mamel.isNumberOfLegsEven());
console.log(horse.getSpeedInMetersPrSecond());
