// (remember to mention line breaks)
//line break after return is interpreted as ;
const list = [7, 13, 9, 8, 4, 1, 2, 16, 0]; // array definition

// double loop with for
for (let i = list.length - 1; i >= 0; i--) {
  for (let j = 0; j <= i - 1; j++) {
    if (list[j] > list[j + 1]) {
      let temp = list[j];
      list[j] = list[j + 1];
      list[j + 1] = temp;
    }
  }
}
console.log('Sorted list : ' + list); // => 0,1,2,4,7,8,9,13,16

const searchInput = (list, searchElement) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

console.log(searchInput(list, 7));
console.log(searchInput(list, 40));
