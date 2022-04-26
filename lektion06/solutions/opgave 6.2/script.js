const compareSort = (compare) => {
  return compare;
};

const compare = (s1, s2) => {
  return s1 > s2 ? 1 : s1 === s2 ? 0 : -1;
};

const compareLen = (s1, s2) => {
  return s1.length > s2.length ? 1 : s1.length === s2.length ? 0 : -1;
};

const array = ['anders', 'Jørgen', 'Beter'];

array.sort((s1, s2) => compareSort(compare(s1, s2)));

console.log(array);
