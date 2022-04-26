let o={x:1}
console.log(o.toString()) //->[object Object]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(o)))
/*  'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    '__proto__',
    'toLocaleString' ....
  */
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(o))) //->  //null