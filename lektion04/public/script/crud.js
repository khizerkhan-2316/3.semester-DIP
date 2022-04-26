//crud.js
document.body.innerHTML = '<h1>HeadLine 1</h1>'

const headLine2 = document.createElement("h1")
headLine2.textContent = "HeadLine 2"
document.body.appendChild(headLine2)


setTimeout(() => {
    console.log(headLine2.outerHTML)
    console.log(document.body)
    headLine2.outerHTML = '<h2>Changed by  outer html to H2</h2>'
}, 2000)

setTimeout(() => {
    console.log(headLine2.outerHTML)
    console.log(document.body)
    document.querySelector("h2").outerHTML = '<h1>Changed by outer html to H1</h1>'
}, 4000)

