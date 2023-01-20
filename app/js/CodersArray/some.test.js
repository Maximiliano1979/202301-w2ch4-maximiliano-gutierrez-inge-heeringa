const { default: CodersArray } = require("./CodersArray");

describe("Given the some method of the CodersArray class", () => {
  describe("When it receives the callback function (element) => element === 5", () => {
    test("Then it should return true", () => {
      const codersArrayObjectInstance = new CodersArray(1, 2, 3, 4, 5);
      const expectedElement = 5;

      const result = codersArrayObjectInstance.some(
        (element) => element === expectedElement
      );

      expect(result).toBeTruthy();
    });
  });

  describe("When it receives the callback function (element) => element === 5", () => {
    test("Then it should resturn false", () => {
      const codersArrayObjectInstance = new CodersArray(1, 2, 3, 4);
      const expectedElement = 5;

      const result = codersArrayObjectInstance.some(
        (element) => element === expectedElement
      );

      expect(result).toBeFalsy();
    });
  });
});
