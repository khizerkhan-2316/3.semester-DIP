const isPrime = (num) => {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const writeOutPrimeNumbers = (upToNumber) => {
  let array = [];
  for (let i = 0; i <= upToNumber; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }

  return array;
};

console.log('Isprime up to 100: ' + writeOutPrimeNumbers(100));
