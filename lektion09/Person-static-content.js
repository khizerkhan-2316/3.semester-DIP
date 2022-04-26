function Person(name){
    this.name=name
    Person.increaseAntal()
}
Person.prototype.toString=function(){return "MY NAME IS: "+this.name}
Person.antal=0
Person.increaseAntal=function(){
    Person.antal++
}
console.log(Person.antal) // -> 0
let p1=new Person("Hans")
console.log(Person.antal)  // -> 1
let p2=new Person("Gurli")
console.log(Person.antal)  // -> 2
console.log(p1.toString())  // -> MY NAME IS: Hans
console.log(p2.toString())  // -> MY NAME IS: Gurli
