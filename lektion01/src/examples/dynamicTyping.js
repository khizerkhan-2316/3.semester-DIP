const list = [1, 2, 3, 4, 5]
//list="horse" // COMPILE error because array a CONSTANT


let list1 = [1, 2, 3, 4, 5, 6]
console.log(list1)
list1 = "horse" //Wow not an error ????
console.log(list1)

list1 = "horse" + 7 //God d..  not an error ????
console.log(list1)

list1 = ["7"] + 7 //Wow not an error holy macaroni ????
console.log(list1)

list1 = [7] - 7 //Not an error say f... what ????
console.log(list1)
