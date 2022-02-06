console.log("_______Destruct array________________")
let [first, second] = [1, 2]
console.log(first); // => 1
console.log(second); // => 2
[first, second] = [second, first];
console.log(first); // => 2
console.log(second); // => 1


console.log("_______Destruct object________________")
let {name, age} = {name: 1, age: 2}
let {name: foo, age: bar} = {name: 1, age: 2}
console.log(name); // => 1
console.log(age); // => 2
console.log(foo); // => 1
console.log(bar); // => 2


console.log("_______rest operator________________")
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // => 10
console.log(b); // => 20
console.log(rest); // => [30, 40, 50]


console.log("_______spread operator________________")

function params(a, b, c) {
    console.log(`first ${a}, second ${b}, third ${c}`)
}

params(rest)//first 30,40,50, second undefined, third undefined
params(...rest)//first 30, second 40, third 50

let ob = {name: "John", age: 34, salary: 0}
let newStuff = {...ob, someNew: "stuff"}
console.log(newStuff)//{ name: 'John', age: 34, salary: 0, someNew: 'stuff' }