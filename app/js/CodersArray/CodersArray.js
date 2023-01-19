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
}

export default CodersArray;
