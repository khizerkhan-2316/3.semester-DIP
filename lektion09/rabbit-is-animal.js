let animal={          //[[Prototype]]->Object.prototype
     eats:true

}

let rabbit={           //[[Prototype]]->Object.prototype
     jumps:true
}


Object.setPrototypeOf(rabbit,animal)

console.log(rabbit.eats) //-> true
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)))  // -> [ 'eats' ]

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(rabbit))))

/*[
    'constructor’,
     …
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    …
    'toLocaleString'
  ]*/

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(rabbit)))) // -> null

