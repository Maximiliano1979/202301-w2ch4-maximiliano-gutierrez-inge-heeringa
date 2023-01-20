const { default: CodersArray } = require("./CodersArray");

describe("Given the find method of the CodersArray class", () => {
  describe("When it receives the callback function (element) => element > 10", () => {
    test("Then it should return 11", () => {
      const codersArrayObjectInstance = new CodersArray(4, 6, 9, 11, 50);
      const minimumValue = 10;
      const expectedResult = 11;

      const result = codersArrayObjectInstance.find(
        (element) => element > minimumValue
      );

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives the callback function (element) => element > 10", () => {
    test("Then it should return undefined", () => {
      const codersArrayObjectInstance = new CodersArray(4, 6, 9, 3, 5);
      const minimumValue = 10;
      const expectedResult = undefined;

      const result = codersArrayObjectInstance.find(
        (element) => element > minimumValue
      );

      expect(result).toBe(expectedResult);
    });
  });
});
