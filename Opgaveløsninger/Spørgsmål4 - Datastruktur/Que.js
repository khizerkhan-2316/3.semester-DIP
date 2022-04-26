class CustomQue {
  _array = [];
  _listeners = [];

  enqueue(element) {
    if (element === null || element === undefined) {
      throw new Error('Element must not be undefined or null');
    }

    this._array.unshift(element);

    this._listeners.forEach((listener) =>
      this.callListeners(listener, element)
    );
  }

  async callListeners(listener, element) {
    listener(element);
  }

  dequeue() {
    return this._array.shift();
  }

  addListener(listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function');
    }
    this._listeners.push(listener);
  }

  removeListener(inputListener) {
    this._listeners = this._listeners.filter(
      (listener) => listener !== inputListener
    );
  }
}

module.exports = CustomQue;
