//worker.js
onmessage = (event) => {
    console.log("Receiving the message" + event.data)
    const res = isPrime(parseInt(event.data))
    postMessage(res?"yes it is prime" :"no im sorry")
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
