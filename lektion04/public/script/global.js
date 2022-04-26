//global.js
var propertyByVar = 1
propertyByNothing = 1
let propertyByLet = 1
const propertyByConst = 1

function propertyByFunction() {
    console.log("HELLO")
}

console.log(window.propertyByVar)
console.log(window.propertyByNothing)
console.log(window.propertyByLet)
console.log(window.propertyByConst)
window.propertyByFunction()
