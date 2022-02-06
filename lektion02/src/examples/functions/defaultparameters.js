function f(a, b = 'default') {
    return a + b;
}

console.log(f(1, 2)); // => 3
console.log(f(3)); // => 3default