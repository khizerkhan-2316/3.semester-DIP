const data = [[185, "male"], [165, "female"], [175, "female"], [175, "male"], [165, "female"], [190, "male"], [145, "female"]]

let sum = 0
for (let elem of data) {
    sum += elem[0]
}
console.log(sum / data.length)

let av = sum / data.length
let temp = 0
for (let elem of data) {
    temp += Math.pow((elem[0] - av), 2)
}
console.log(av)
console.log(Math.sqrt(temp /( data.length-1)))


sum = 0
length = 0
for (let elem of data) {
    if (elem[1] === "male") {
        sum += elem[0]
        length++
    }
}

console.log(length === 0 ? 0 : sum / length)