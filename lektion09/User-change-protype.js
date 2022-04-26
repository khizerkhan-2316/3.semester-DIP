
let animal={eats:true}

function User(handle) {
    this.handle = handle;
}
User.prototype.toString = function () {
    return "Handle: " + this.handle
}
let user = new User("myHandle")
console.log(user.toString())  // -> Handle: myHandle

Object.setPrototypeOf(user, animal)
console.log(user.eats)   // -> true
console.log(user.toString())  // -> [object Object]  WHY??
