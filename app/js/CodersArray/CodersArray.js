class CodersArray {
  constructor(...elements) {
    let index = 0;
    for (const element of elements) {
      this[index] = element;
      index++;
    }

    this.length = index;
  }
}

export default CodersArray;
