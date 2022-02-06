//"use strict"
console.log(Math.PI)
global.console.log(global.Math.PI)


console.log(x)
{
    var x = 1 //declaration is hoisted to top module scope
}
console.log(x)
global.console.log(global.x) //global.x auto declared but undefined

doStuff()

function doStuff() { // function is hoisted to top module scope
    console.log("doStuff")
}


//global.doStuff()//TypeError: global.doStuff is not a function
z = "empty"
console.log(global.z)
console.log(z)
