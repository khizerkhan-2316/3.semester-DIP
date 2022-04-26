//watch.js
const stop = false

function tick() {
    let watch = document.querySelector("div");
    watch.innerText = new Date().toLocaleTimeString();
    if (!stop) {
        setTimeout(tick, 1000);
    }
}

tick();