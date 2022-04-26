class Cykel {
  _model;
  _pris;
  static totalAntal = 0;
  static samletPris = 0;

  constructor(model, pris) {
    if (typeof model !== 'string' || typeof pris !== 'number') {
      throw new Error('Check types');
    }

    this._model = model;
    this._pris = pris;
    Cykel.totalAntal += 1;

    Cykel.samletPris += pris;
  }

  static genemsnitPris() {
    return Cykel.samletPris / Cykel.totalAntal;
  }

  toString() {
    return `Model: ${this._model}, Pris: ${this._pris}`;
  }
}

module.exports = Cykel;
