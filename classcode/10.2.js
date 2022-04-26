class StringStack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  push(element) {
    this.#stack.unshift(element);
  }

  pop() {
    this.#stack.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.#stack[0];
    }

    throw new Error('#stack is empty');
  }

  isEmpty() {
    return this.#stack.length === 0;
  }

  toString() {
    return this.#stack;
  }
}

const stack = new StringStack();

stack.push('Anders');
stack.push('Lars');
stack.push('Simone');

console.log(stack.toString());

stack.pop();

console.log(stack.toString());
console.log(stack.peek());
console.log(stack.isEmpty());
