// longRunning.js
function longRunning() {
    let start = Date.now();
    console.log(start % 100000);
    while (true){
        let nu = Date.now();
        if ((nu - start) >= 5000) return;
    }
}
function fastRunning() {
    console.log("FAST")
}

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
b1.onclick = longRunning;
b2.onclick = fastRunning;

