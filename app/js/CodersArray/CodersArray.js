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
    for (let position = 0; position < this.length; position++) {
      if (callback(this[position])) {
        return true;
      }
    }

    return false;
  }

  find(callback) {
    for (let position = 0; position < this.length; position++) {
      if (callback(this[position])) {
        return this[position];
      }
    }

    return undefined;
  }
}

export default CodersArray;
