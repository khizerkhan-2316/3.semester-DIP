const CustomQue = require('./Que.js');

const que = new CustomQue();

que.addListener(console.log);

que.enqueue(10);
que.enqueue(20);
