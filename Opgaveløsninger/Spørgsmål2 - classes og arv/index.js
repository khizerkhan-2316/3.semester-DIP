const Cykel = require('./Cykel.js');

const ElCykel = require('./ElCykel.js');

const cykel = new Cykel('YX 2022', 23023);
const cykel1 = new Cykel('YX 2023', 2323);
const cykel2 = new Cykel('YX 2024', 5323);
const cykel3 = new Cykel('YX 2025', 25023);

const elcykel = new ElCykel('EL 2022', 203423, 100);
const elcykel1 = new ElCykel('EL 2023', 253423, 100);
const elcykel2 = new ElCykel('EL 2024', 253423, 100);
const elcykel3 = new ElCykel('EL 2025', 503423, 100);
const elcykel4 = new ElCykel('EL 2026', 4423, 100);

const cykler = [
  cykel,
  cykel1,
  cykel2,
  cykel3,
  elcykel,
  elcykel1,
  elcykel2,
  elcykel3,
  elcykel4,
];

console.log(Cykel.genemsnitPris());
