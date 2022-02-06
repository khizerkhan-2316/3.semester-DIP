let s = "humans should be educated in dopamin control"
console.log(s[5])
//console.log(s.shift()) fails
let array = Array.from(s)
console.log(array)
array.unshift("BULL:")
let reassemble = array.join("")
console.log(reassemble)