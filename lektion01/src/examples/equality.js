let leftSide = "hest"
let rightSide = "pig"

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide == rightSide)


leftSide = "1234"
rightSide = 1234

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide == rightSide) // WOW why is that

leftSide = "horse"
rightSide = true

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide == rightSide) // why not true

leftSide = 1
rightSide = true

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide == rightSide) // WOW this is true
console.log(leftSide != rightSide) // WOW this is false


//lets try with ===
console.log("-----------------------------")


leftSide = "hest"
rightSide = "pig"

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide === rightSide)


leftSide = "1234"
rightSide = 1234

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide === rightSide) // WOW why is that

leftSide = "horse"
rightSide = true

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide === rightSide) // why not true

leftSide = 1
rightSide = true

console.log(`the typeof leftSide is ${typeof leftSide},the type of right side is ${typeof rightSide}`)
console.log(leftSide === rightSide) // WOW this is true
console.log(leftSide !== rightSide) // WOW this is false
