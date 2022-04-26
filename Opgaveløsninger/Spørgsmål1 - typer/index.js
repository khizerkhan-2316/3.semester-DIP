const lessThan = (a, b) => {
  checkParamtersValid(a, b);

  return a < b ? true : false;
};

const checkParamtersValid = (a, b) => {
  if (
    (typeof a === 'string' && typeof b !== 'string') ||
    (typeof a === 'number' && typeof b !== 'number')
  ) {
    throw new Error('Parameter types must be same type');
  }
};

const minimum = (array) => {
  if (!isArray(array) || array.length === 0) {
    throw new Error('The parameter must be an array and it must not be empty');
  }

  let min = null;

  for (let i = 0; i < array.length; i++) {
    if (lessThan(array[i], array[i + 1])) {
      min = array[i];
    }

    if (i === array.length - 2) {
      return min < array[array.length - 1] ? min : array[array.length - 1];
    }
  }

  return min;
};

function isArray(myArray) {
  return myArray.constructor.toString().indexOf('Array') > -1;
}

const minimumText = (array) => {
  if (!isArray(array) || array.length === 0) {
    throw new Error('The parameter must be an array and it must not be empty');
  }

  const shortest = array.reduce((shortestWord, currentWord) => {
    return lessThan(currentWord.length, shortestWord.length)
      ? currentWord
      : shortestWord;
  }, array[0]);

  return shortest;
};

console.log(minimumText(['dinfars', 'hej', 'test', 'na', 'henaf']));

//console.log(minimum([20, 3, 4, 5, 4]));
