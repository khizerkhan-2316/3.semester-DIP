console.log('running');

function Stack() {}

Stack.prototype = Object.create(Array.prototype);

Stack.prototype.peek = function () {
  return this[0];
};

const stack = new Stack();

console.log(stack);

stack.push(10);
stack.push(10);

console.log(stack);

stack.pop();
console.log(stack);

console.log(stack.peek());
