//setInterval.js
function callback() {
    console.log("home from the event queue")
}

const id = setInterval(callback, 1000)

setTimeout(() => clearInterval(id), 8000)