//queries.js
const e1 = document.querySelector("#elem1")
e1.style.backgroundColor = "red"
const e2 = document.querySelector("#elem2")
e2.style.backgroundColor = "green"

const headLines = document.querySelectorAll("h2")


setTimeout(() => {
    e1.style.backgroundColor = "green"
    e2.style.backgroundColor = "red"
}, 1000)

setTimeout(() => {
    const array = Array.from(headLines)
    for (let elem of array) {
        elem.style.color = "red"
    }
}, 2000)