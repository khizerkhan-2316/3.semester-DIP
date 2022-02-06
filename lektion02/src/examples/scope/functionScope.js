//'use strict'
globalTest = 6

console.log("first y: " + y)

function test() {
    console.log("first x: " + x)
    var x = 10;
    console.log("second x: " + x)
}

//console.log(x)
test()

{
    var y = 2
}
console.log("second y: " + y)
console.log("third y: " + global.y) // no error but undefined y is created in global scope but undefined

console.log("global test 1: " + globalTest)
console.log("global test 2: " + global.globalTest)