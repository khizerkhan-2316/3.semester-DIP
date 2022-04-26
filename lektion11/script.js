function throwDie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 6) + 1);
    }, Math.floor(Math.random() * 2 + 1000));
  });
}

function throwToDices() {
  const results = Promise.all([throwDie(), throwDie()]);

  return results.then((array) => {
    return array[0] === array[1];
  });
}

function distribution(antal) {
  const promises = new Array(antal).fill(0).map(
    (value) =>
      new Promise((resolve, reject) => {
        resolve(throwDie());
      })
  );

  const frequency = new Array(7);

  return Promise.all(promises).then((value) => {
    const map = value.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );

    const newMad = new Map([...map.entries()].sort()).forEach((key) =>
      console.log(key)
    );

    const newMap = new Map([...map.entries()].sort());

    return newMap;
  });
}

console.log(distribution(5).then((map) => console.log(map)));
