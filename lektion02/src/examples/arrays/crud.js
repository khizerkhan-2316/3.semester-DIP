let c = [0, 1, 2, 3];
c[4] = 4;
console.log(c[1]); // => 1
c[2] = 'two';
delete c[3];
console.log(c); // => [ 0, 1, 'two', <1 empty item>, 4 ]
