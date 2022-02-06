const unsortedList = [6, 3, 9, 8, 4, 1, 2, 16, 0]; // array definition

// double loop with for
for (let i = unsortedList.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (unsortedList[j] > unsortedList[j + 1]) {
            let temp = unsortedList[j];
            unsortedList[j] = unsortedList[j + 1];
            unsortedList[j + 1] = temp;
        }
    }
}

console.log(unsortedList) // => 0,1,2,4,7,8,9,13,16
let find = 2
let index = -1
let i = 0
while (find >= unsortedList[i] && i < unsortedList.length) {
    if (unsortedList[i] === find) {
        index = i
    }
    i++
}
console.log(index)




