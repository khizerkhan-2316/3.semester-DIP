let o={x:1}
console.log(o.toString()) //->[object Object]
o.toString=function(){return "x: "+this.x} 
console.log(o.toString()) //->x: 1
