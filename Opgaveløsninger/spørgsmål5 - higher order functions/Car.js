class Car {
  _model;
  _color;

  constructor(model, color) {
    this._model = model;
    this._color = color;
  }

  toString() {
    return `Model: ${this._model}, Color: ${this._color}`;
  }
}

module.exports = Car;
