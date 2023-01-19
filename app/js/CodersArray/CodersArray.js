class CodersArray {
  length = 0;

  constructor(...elements) {
    for (const element of elements) {
      this[this.length] = element;
      this.length++;
    }
  }

  push(element) {
    this[this.length] = element;
    this.length++;
  }

  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        return true;
      }
    }

    return false;
  }
}

export default CodersArray;
