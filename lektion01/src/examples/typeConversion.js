let x1 = "s" + 3
console.log(x1)
console.log(typeof x1)

console.log("----------------")
let x2 = 3 + "s"
console.log(x2)
console.log(typeof x2)


console.log("----------------")
let y = "s" - 3
console.log(y)
console.log(typeof y)

console.log("----------------")
let z = "5" - 3
console.log(z)
console.log(typeof z)

console.log("----------------")
let w = [1, 2, 3][0] + 2
console.log(w)
console.log(typeof w)

console.log("----------------")
let u = null + NaN + 1
console.log(u)
console.log(typeof u)

console.log("----------------")
let v = null + undefined + 1
console.log(v)
console.log(typeof v)

console.log("----------------")
let c = null + 1
console.log(c)
console.log(typeof c)

console.log("------truthy falsy values---------")
let t1 = '0' && 1
console.log(typeof t1)
console.log(t1)
console.log(t1 ? "true" : "false")

console.log("----------------")
let t2 = 0n && 1
console.log(typeof t2)
console.log(t2 ? "true" : "false")

console.log("----------------")
let t3 = NaN && 1
console.log(typeof t3)
console.log(t3 ? "true" : "false")

console.log("----------------")
let t4 = 0 && 1
console.log(typeof t4)
console.log(t4 ? "true" : "false")

console.log("----------------")
let t5 = [1, 2, 3] && 1
console.log(typeof t5)
console.log(t5 ? "true" : "false")

console.log("------cool countdown ----------")
let index = 5;
while (index) {
    console.log(index--); // 5 -> 0
}

