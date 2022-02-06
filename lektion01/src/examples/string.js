const horse = "All horses deserve, at least once in their lives, to be loved by a little girl"
console.log(horse.length) // this seems strange ?? any suggestions ??
console.log(typeof horse)

console.log(horse[0])
console.log(horse[horse.length - 1])


console.log("--------------------")
let toMuch = horse[horse.length]
console.log(typeof toMuch)
console.log(toMuch)

console.log("--------------------")
//Creating NEW strings by concatenation
let x = "All horses"
console.log(x)
x = x += " deserve, at least once in their lives, to be loved by a little girl"
console.log(x)

console.log("--------------------")
// immutable but no error ??
let y = "horse"
console.log(y)
y[1] = "o"
y[2] = "u"
y[3] = "n"
y[4] = "d"
console.log(y)

console.log("--------------------")
//unicode literals
let z = "\u6ac3\u6cc3"
console.log(z)

console.log("--------------------")
//literals
let s1 = "horse"
console.log(s1)
let s2 = 'horse'
console.log(s2)
let s3 = `horse`
console.log(s3)

console.log("--------------------")
//let s4 = "horse quotation:"All horses deserve, at least once in their lives, to be loved by a little girl""

let s5 = "horse proverb:'All horses deserve, at least once in their lives, to be loved by a little girl'"
console.log(s5)
let s6 = 'horse proverb:"All horses deserve, at least once in their lives, to be loved by a little girl"'
console.log(s6)
let s7 = `horse proverb:"All horses deserve, at least once in their lives, to be loved by a little girl"`
console.log(s7)
let s8 = `horse proverb:'All horses deserve, at least once in their lives, to be loved by a little girl'`
console.log(s8)

let s9 = "horse proverb:\"All horses deserve, at least once in their lives, to be loved by a little girl\""
console.log(s9)


//String literal templates  VERY useful for formatting text
console.log("--------------------")
let template = `horse proverb:"${x}"`
console.log(template)


//line breaks

//let br="kljslkjlkjs doesnt work
//    slklæksælksælks"
console.log("--------------------")
let br1 = "All horses deserve, at least once in their lives \n to be loved by a little girl"
console.log(br1)
let br2 = `All horses deserve, at least once in their lives
to be loved by a little girl`
console.log(br2)

