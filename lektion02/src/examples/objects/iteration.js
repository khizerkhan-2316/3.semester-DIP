
let probe = {x: 1, y: 2, z: 3}
console.log(typeof probe)
//console.log(x in probe)
console.log("x" in probe)
console.log("w" in probe)
//console.log(w in probe)

for (let elem in probe) {
    console.log(elem)
}
/*
for (let elem of probe) {
    console.log(elem)
}
*/


for (let elem in probe) {
    console.log(probe[elem])
}



