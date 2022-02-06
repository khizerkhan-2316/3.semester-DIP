const but = document.querySelector("#but")
but.onclick = handle

function handle(event) {
    //Promise.resolve("resolved").then(data => console.log(data))
    console.log("click")
}


let now = Date.now()
const later = new Date(now + 10000)
console.log("start" + now + "later-now" + (later - now))
while (later > now) {
    now = Date.now()
}
Promise.resolve("resolved").then(data => console.log(data))
console.log("done")