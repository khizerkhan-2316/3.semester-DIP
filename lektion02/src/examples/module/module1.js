const m2 = require("./module2.js")
let x = 1
function gl(){
    console.log("gl"+this.z)
}

console.log(m2.x)
console.log(x)
m2.f()
console.log(z)
console.log(global.z)
gl()