const divColor = document.querySelector("#color")
const buttonColor = document.querySelector("#play")
const buttonFactorize = document.querySelector("#factorize")
const buttonFactorizeNoThread = document.querySelector("#factorizeNoThread")
const primeInput = document.querySelector("#prime")
const primeRes = document.querySelector("#res")

const colors = ["red", "yellow", "green"]
//2147483647
const factorizeWorker = new Worker("worker.js")
factorizeWorker.onmessage = (e) => {
    primeRes.value = e.data
}


buttonColor.onclick = () => {
    console.log("play")
    divColor.style.backgroundColor = colors[Math.floor(Math.random() * 3)]
}
buttonFactorize.onclick = () => {
    primeRes.value = ""
    factorizeWorker.postMessage(primeInput.value)
    console.log("factor")

}
buttonFactorizeNoThread.onclick = () => {
    primeRes.value = ""
    const res = isPrime(parseInt(primeInput.value))
    primeRes.value = res ? "yes it is a prime" : "no im sorry"
    console.log("factor")
}

function isPrime(prime) {
    console.log(prime)
    for (let i = 2; i < prime; i++) {
        if (prime % i === 0) {
            console.log(i)
            return false
        }
    }
    return true
}



