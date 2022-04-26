const Cykel = require('./Cykel.js');

class ElCykel extends Cykel {
  _raekkevide;

  constructor(model, pris, raekkevide) {
    if (typeof raekkevide !== 'number') {
      throw new Error('Raekkevide must be a number');
    }

    super(model, pris);
    this._raekkevide = raekkevide;
  }

  toString() {
    return super.toString() + ', rækkevide: ' + this._raekkevide;
  }
}

module.exports = ElCykel;
