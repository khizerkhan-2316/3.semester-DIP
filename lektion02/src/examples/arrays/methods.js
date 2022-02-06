let a = [0, 1, 2, 3];
console.log(a.length) //4

a.push("pushed")
console.log(a) //[ 0, 1, 2, 3, "pushed" ]
console.log(a.pop())//removes last element pushed
console.log(a) //[ 0, 1, 2, 3]

console.log(a.shift()) // removes first element 0
console.log(a) //[1, 2, 3]

console.log(a.unshift("a", "b")) // insert a,b in beginning an return new length 5
console.log(a) //[ 'a', 'b', 1, 2, 3 ]


console.log(a.includes('a')) //true
console.log(a.includes('c')) //false
