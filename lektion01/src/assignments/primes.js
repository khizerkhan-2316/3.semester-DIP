const max = 100
let isPrime
for (let i = 3; i <= max; i += 2) {
    isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false
        }
    }
    if (isPrime) {
        console.log(i)
    }
}