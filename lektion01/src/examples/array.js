let array = [10, 20, 30, 40, 50]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
console.log("------------------------")
for (let index in array) {
    console.log(array[index])
}
console.log("------------------------")
for (let element of array) {
    console.log(element)
}
