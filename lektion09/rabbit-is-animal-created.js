let animal = { eats: true }

let rabbit = Object.create(animal, 
{ jumps: { value: true,writable:true },
  carrotEater: { value: true } 
},

)
console.log(rabbit.eats)
console.log(rabbit.jumps)
console.log(rabbit.carrotEater)


let nonAnimal = Object.create(null)

console.log(nonAnimal.toString())


console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)))
//[ 'eats' ]
console.log(Object.getPrototypeOf(nonAnimal))
// null
