function makeCounter(start) {
    let count = start
    return function () {
        const value=10
        return value+count++
    }
}

let counter = makeCounter(3)

console.log(counter())
console.log(counter())
console.log(counter())