let animal={eats:true}

function User(handle) {
    this.handle = handle;
}
User.prototype.toString = function () {
    return "Handle: " + this.handle
}
let user = new User("myHandle")
console.log(user.toString())  // -> Handle: myHandle
console.log(user.eats)  // -> undefined

User.prototype=animal
console.log("LKJLKJLKJLKJ")
console.log(user instanceof User)
console.log(user.__proto__.constructor)


let animalUser = new User("myHandle")
console.log(animalUser.eats)   // -> true
console.log(animalUser.toString())  // -> [object Object]  WHY??
