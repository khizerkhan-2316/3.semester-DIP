function params(v1, v2, f) {
    return () => console.log(`${v1}  ${v1}  ${f(v1, v2)}`)
}

let c = params(1, 2, (a, b) => a + b)
console.log(c())