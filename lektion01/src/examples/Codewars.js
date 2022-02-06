const array = [30, 30, 30, 20, 30, 30];

const stray = (numbers) => {
  const unique = numbers.filter(
    (number, index) => numbers.indexOf(number) === index
  );

  return unique.length === 1 ? unique[0] : null;
};

console.log(stray(array));
