let o = {
    x: 2,
    m(y) {
        return this.x + y
    }
}
//the "this" binding is dynamically resolved to the surrounding object o
console.log(o.m(3))
console.log(o['m'](4))

console.log("----------------------------------")

global.x = 3
let g = o.m
// g is now called outside an object and this is resolved to global scope
console.log(g(5))

console.log("----------------------------------")

let o1 = {
    x: 2, m(y) {
        return this.x + y
    }
}
let x = 9
o1.m = function (y) {
    return x + y
}
console.log(o1.m(13))