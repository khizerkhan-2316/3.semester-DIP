console.log('running');

function Animal(name, lifespan, metabolism) {
  this.name = name;
  this.lifespan = lifespan;
  this.metabolism = metabolism;
}

Animal.prototype.getLifespanInMonths = function () {
  return this.lifespan * 12;
};

Animal.prototype.getTotalCalories = function () {
  return this.lifespan * 365 * this.metabolism;
};

const animal = new Animal('TEST', 10, 50);

console.log('Lifespan in months: ' + animal.getLifespanInMonths());

console.log('Calories in total: ' + animal.getTotalCalories());

console.log(animal);
