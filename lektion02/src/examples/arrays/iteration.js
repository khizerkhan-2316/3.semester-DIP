let d = [0, 1, 2, 3, 4];
delete d[2];


let s = '';
for (let i = 0; i < d.length; i++)
    s += d[i] + ', ';
console.log(s); // => 0, 1, undefined, 3, 4,

s = '';
for (let i in d)
    s += d[i] + ', ';
console.log(s); // => 0, 1, 3, 4,

s = '';
for (let e of d)
    s += e + ', ';
console.log(s); // => 0, 1, undefined, 3, 4,

