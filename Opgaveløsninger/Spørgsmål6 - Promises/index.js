const terningKast = () => {
  return new Promise((resolve, reject) => {
    const randomtime = randomTime();
    setTimeout(() => {
      const randomValue = randomNumber();
      console.log('Value: ' + randomValue);
      resolve(randomValue);
    }, randomtime);
  });
};

const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};

const randomTime = () => {
  const randomNumber = Math.floor(Math.random() * 2000);
  return randomNumber;
};

const toEnsTerninger = async () => {
  return new Promise((resolve, reject) => {
    const results = Promise.all([terningKast(), terningKast()]);

    results.then((array) => {
      array[0] === array[1] ? resolve(true) : resolve(false);
    });
  });
};

toEnsTerninger().then((data) => console.log(data));
